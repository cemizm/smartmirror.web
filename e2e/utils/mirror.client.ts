import * as rm from "typed-rest-client/RestClient";
import {IRequestOptions, IRestResponse} from "typed-rest-client/RestClient";
import {LoginResponse, LoginRequest, Mirror} from "@cemizm/smartmirror-shared";
import "rxjs/add/observable/fromPromise";


export class MirrorClient {

  private client: rm.RestClient;
  private accessToken: string;

  constructor() {
    this.client = new rm.RestClient('rest-samples', 'https://sm-webapi.azurewebsites.net');
  }

  private getOptions(): IRequestOptions {
    return {
      additionalHeaders: {
        Authorization: "Bearer " + this.accessToken
      }
    };
  }

  login(user: string, pass: string): Promise<IRestResponse<LoginResponse>> {
    return this.client.create<LoginResponse>('/api/auth/', <LoginRequest>{user: user, password: pass}).then(res => {
      this.accessToken = res.result.accessToken;
      return res;
    })
  }

  getMirror(mirrorId: string): Promise<IRestResponse<Mirror>> {
    return this.client.get<Mirror>('/api/mirrors/' + mirrorId);
  }

  updateMirror(mirror: Mirror): Promise<IRestResponse<any>> {
    return this.client.replace<any>('/api/mirrors', mirror);
  }

  registerMirror(number: string): Promise<IRestResponse<Mirror>> {
    return this.client.create<Mirror>('/api/tickets/' + number, null, this.getOptions());
  }

}
