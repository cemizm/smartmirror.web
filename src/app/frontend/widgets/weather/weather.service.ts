import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';

import { WeatherCurrent, WeatherForecast, WeatherInformation, MainInformationCurrent } from "./weather.models";
import {Subject} from "rxjs/Subject";
import {current} from "codelyzer/util/syntaxKind";

const APPID = '45f4dd45e0f724512ba044c5a2caf4bc';

@Injectable()
export class WeatherService {

  private baseUrl= 'http://api.openweathermap.org/data/2.5/';
  private weatherCurrent: WeatherCurrent;
  private weatherCurrentSubject: Subject<WeatherCurrent>;
  errorMessage: string;

  constructor(private http: Http) {
    this.weatherCurrentSubject = new Subject<WeatherCurrent>();
    this.polledHttpGetRequest('./assets/weather-current.json', 2000).subscribe(data => {
        this.weatherCurrent = this.createWeatherCurrent(data);
        this.weatherCurrentSubject.next(this.weatherCurrent);
      }
    );

    /*
    this.polledHttpGetRequest('./assets/weather-current.json', 2000).subscribe(data =>
      this.weatherDataForecast.push(
        data.list.forEach(element => {
          this.weatherDataForecast.push(this.createWeatherForecast(element));
        })
      )
    );
    */
  }

  getCurrentSubject(): Observable<WeatherCurrent> {
    return this.weatherCurrentSubject;
  }

  createWeatherCurrent(data: any): WeatherCurrent {
    const weatherInformation: WeatherInformation = {
      weatherId: 0,
      weatherMain: "",
      weatherDescription: "",
      icon: "http://openweathermap.org/img/w/"  + data.weather[0].icon + ".png"
    };

    const mainInformationCurrent: MainInformationCurrent = {
      temp: data.main.temp,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0
    };

    const wc: WeatherCurrent = {
      coord: null,
      weatherinformation: weatherInformation,
      base: "",
      maininformation: mainInformationCurrent,
      visibility: 0,
      windinformation: null,
      cloudinformation: null,
      dt: data.dt * 1000,
      sysInformation: null,
      id: 0,
      name: data.name,
      cod: 0
    };
    return wc;
  }
  /*
  createWeatherForecast(data: any): WeatherForecast {
    return new WeatherForecast(
              "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
              data.main.temp,
              data.dt
    );
  }
  */

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
    const body = res.json();
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
    // }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
