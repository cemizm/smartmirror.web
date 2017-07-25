import * as rm from 'typed-rest-client/RestClient';
import {LoginResponse, User, Widget} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/observable/fromPromise';
import {IRequestOptions} from "typed-rest-client/RestClient";

interface Cred {
  User: string;
  Password: string;
}

interface Mirror {
  id: string;
  user: string;
  name: string;
  image: string;
  widgets: Array<Widget>;
}

interface Ticket {
  number: string;
  mirrorId: string;
}

export class MirrorClient {

  private client: rm.RestClient;
  private accessToken: string;
  private mirror: Mirror;

  constructor() {
    this.client = new rm.RestClient('rest-samples', 'https://sm-webapi.azurewebsites.net');

  }

  login(user: string, pass: string): Observable<LoginResponse> {
    const cred = <Cred>{User: user, Password: pass};
    return Observable.fromPromise(this.client.create<LoginResponse>('/api/auth/', cred)).map(res => <LoginResponse>res.result);
  }

  getMirror(mirrorId: string): Observable<Mirror> {
    const mirror = <Mirror>{id: mirrorId};
    return Observable.fromPromise(this.client.get('/api/mirrors', mirror)).map(res => <Mirror>res.result);
  }

  updateMirror(mirror: Mirror): Observable<void> {
    const mirrorTest = <Mirror>{
      id: mirror.id,
      name: mirror.name,
      user: mirror.user,
      image: mirror.image,
      widgets: mirror.widgets
    };
    return Observable.fromPromise(this.client.replace('/api/mirrors', mirrorTest)).map(res => {
      this.mirror = <Mirror>res.result;
    });
  }

  registerMirror(number: string, accessToken: string): Observable<Mirror> {
    const ticket = <Ticket>{number: number};
    const header = <IRequestOptions>{
      Authorization: "Bearer " + accessToken
    };
    return Observable.fromPromise(this.client.create<Mirror>('/api/tickets', ticket, header)).map(res => <Mirror>res.result);
  }

}
