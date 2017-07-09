import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";


export class WidgetDataUtils {

  constructor(private http: Http) {
  }

  polledHttpGetRequest(url: string, interval: number): Observable<any> {
    return Observable.interval(interval)
      .switchMap(() => this.http.get(url).map(res => res.json()));
  }

  initialHttpGetRequest(url: string): Observable<any> {
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    errMsg = error.message ? error.message : error.toString();
    // }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
