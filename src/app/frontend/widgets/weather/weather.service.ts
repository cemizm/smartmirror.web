import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';

import {
  WeatherCurrent, WeatherForecast, WeatherInformation, MainInformationCurrent,
  WeatherListItem, MainInformationForecast, CloudInformation, WindInformation, RainInformation, SysInformationForecast,
  City, Coord
} from "./weather.models";
import {Subject} from "rxjs/Subject";

const APPID = '70e703682e7eeff15a6ce5ee7635f37e';
const CITY = 'bielefeld';
const POLL_INTERVAL_MINUTES = 30;


@Injectable()
export class WeatherService {

  private baseUrl= 'http://api.openweathermap.org/data/2.5/';

  private weatherCurrentUrl = this.baseUrl + 'weather?q=' + CITY + '&appid=' + APPID + '&units=metric';
  private weatherForecastUrl = this.baseUrl + 'forecast?q=' + CITY + '&appid=' + APPID + '&units=metric';
  private pollingIntervall = 1000 * 60 * POLL_INTERVAL_MINUTES;

  private weatherCurrent: WeatherCurrent;
  private weatherForecast: WeatherForecast;
  private weatherCurrentSubject: Subject<WeatherCurrent>;
  private weatherForecastSubject: Subject<WeatherForecast>;
  errorMessage: string;

  constructor(private http: Http) {
    this.weatherCurrentSubject = new Subject<WeatherCurrent>();
    this.weatherForecastSubject = new Subject<WeatherForecast>();

    this.initialHttpGetRequest(this.weatherCurrentUrl).subscribe(data => {
        this.weatherCurrent = this.createWeatherCurrent(data);
        this.weatherCurrentSubject.next(this.weatherCurrent);
      }
    );

    this.initialHttpGetRequest(this.weatherForecastUrl).subscribe(data => {
        this.weatherForecast = this.createWeatherForecast(data);
        this.weatherForecastSubject.next(this.weatherForecast);
      }
    );

    this.polledHttpGetRequest(this.weatherCurrentUrl, this.pollingIntervall).subscribe(data => {
        this.weatherCurrent = this.createWeatherCurrent(data);
        this.weatherCurrentSubject.next(this.weatherCurrent);
      }
    );

    this.polledHttpGetRequest(this.weatherForecastUrl, this.pollingIntervall).subscribe(data => {
        this.weatherForecast = this.createWeatherForecast(data);
        this.weatherForecastSubject.next(this.weatherForecast);
      }
    );
  }

  getWeatherCurrentSubject(): Observable<WeatherCurrent> {
    return this.weatherCurrentSubject;
  }

  getWeatherForecastSubject(): Observable<WeatherForecast> {
    return this.weatherForecastSubject;
  }

  createWeatherCurrent(data: any) {
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

  createWeatherForecast(data: any) {
    let weatherList: Array<WeatherListItem> = [];
    let counter = 0;

    data.list.forEach(element => {
      if (counter > 5) {
        return;
      }
      const mainInformationForecast: MainInformationForecast = {
        temp: element.main.temp,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0
      };

      const weatherInformation: WeatherInformation = {
        weatherId: 0,
        weatherMain: "",
        weatherDescription: "",
        icon: "http://openweathermap.org/img/w/"  + element.weather[0].icon + ".png"
      };

      const weatherListItem: WeatherListItem = {
        dt: element.dt * 1000,
        maininformation: mainInformationForecast,
        weatherinformation: weatherInformation,
        /*
         cloudinformation: cloudInformation,
         windinformation: windInformation,
         raininformation: rainInformation,
         sysinformation: sysInformationForecast,
         */
        dt_txt: ""
      };
      weatherList.push(weatherListItem);
      counter++;
    });

    const coord: Coord = {
      lat: 0,
      lon: 0
    };

    const city: City = {
      id: 0,
      name: "",
      coord: coord,
      country: ""
    };

    const wf: WeatherForecast = {
      city: city,
      weatherList: weatherList,
      cnt: 0,
      message: 0,
      cod: ""
    };
    return wf;
  }

  polledHttpGetRequest(url: string, interval: number): Observable<any>{
            return Observable.interval(interval)
        .switchMap(() => this.http.get(url).map(res => res.json()));
  }

  initialHttpGetRequest(url: string): Observable<any>{
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
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
