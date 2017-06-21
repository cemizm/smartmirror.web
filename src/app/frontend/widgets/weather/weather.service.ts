import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';

import { WeatherCurrent } from "./weather";

const APPID = '45f4dd45e0f724512ba044c5a2caf4bc';

@Injectable()
export class WeatherService {

  private baseUrl='http://api.openweathermap.org/data/2.5/';
  public weatherDataCurrent: WeatherCurrent;
  errorMessage: string;

  constructor(private http: Http) { 
    this.weatherDataCurrent = new WeatherCurrent("loading...", "", 0);
    this.polledHttpGetRequest('./assets/weather-current.json', 2000).subscribe(data => 
      this.weatherDataCurrent = new WeatherCurrent(data.name, "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png", data.main.temp));
  }

  polledHttpGetRequest(url: string, interval: number): Observable<any>{
            return Observable.interval(interval) 
        .switchMap(() => this.http.get(url).map(res => res.json()));
  }

  getWeatheritemsbyCity(cityName): Observable<any>{

    return this.http.get(this.baseUrl +'weather?q='+ cityName +'&appid='+ APPID +'&units=metric')
      .map(response => response.json())
      .catch(this.handleError);
  }

  getWeatherForecast(cityName): Observable<any[]>{

    return this.http.get(this.baseUrl+'forecast?q='+ cityName +'&appid='+ APPID +'&units=metric')
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    errMsg = error.message ? error.message : error.toString();
    //}
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
