import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";

import {
  City,
  Coord,
  MainInformationCurrent,
  MainInformationForecast,
  WeatherCurrent,
  WeatherForecast,
  WeatherInformation,
  WeatherListItem
} from "./weather.models";
import {Subject} from "rxjs/Subject";
import {WidgetDataUtils} from "../utils/widget.data.utils";

const APPID = '70e703682e7eeff15a6ce5ee7635f37e';
const CITY = 'bielefeld';
const POLL_INTERVAL_MINUTES = 30;


@Injectable()
export class WeatherService {

  private baseUrl = 'http://api.openweathermap.org/data/2.5/';

  private weatherCurrentUrl = this.baseUrl + 'weather?q=' + CITY + '&appid=' + APPID + '&units=metric';
  private weatherForecastUrl = this.baseUrl + 'forecast?q=' + CITY + '&appid=' + APPID + '&units=metric';
  private pollingIntervall = 1000 * 60 * POLL_INTERVAL_MINUTES;

  private widgetDataUtils: WidgetDataUtils;
  private weatherCurrent: WeatherCurrent;
  private weatherForecast: WeatherForecast;
  private weatherCurrentSubject: Subject<WeatherCurrent>;
  private weatherForecastSubject: Subject<WeatherForecast>;
  errorMessage: string;

  constructor(private http: Http) {
    this.widgetDataUtils = new WidgetDataUtils(http);
    this.weatherCurrentSubject = new Subject<WeatherCurrent>();
    this.weatherForecastSubject = new Subject<WeatherForecast>();

    this.widgetDataUtils.initialHttpGetRequest(this.weatherCurrentUrl).subscribe(data => {
        this.weatherCurrent = this.createWeatherCurrent(data);
        this.weatherCurrentSubject.next(this.weatherCurrent);
      }
    );

    this.widgetDataUtils.initialHttpGetRequest(this.weatherForecastUrl).subscribe(data => {
        this.weatherForecast = this.createWeatherForecast(data);
        this.weatherForecastSubject.next(this.weatherForecast);
      }
    );

    this.widgetDataUtils.polledHttpGetRequest(this.weatherCurrentUrl, this.pollingIntervall).subscribe(data => {
        this.weatherCurrent = this.createWeatherCurrent(data);
        this.weatherCurrentSubject.next(this.weatherCurrent);
      }
    );

    this.widgetDataUtils.polledHttpGetRequest(this.weatherForecastUrl, this.pollingIntervall).subscribe(data => {
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
      weatherId: "owf owf-" + data.weather[0].id,
      weatherMain: "",
      weatherDescription: "",
      icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
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
        weatherId: "owf owf-" + element.weather[0].id,
        weatherMain: "",
        weatherDescription: "",
        icon: "http://openweathermap.org/img/w/" + element.weather[0].icon + ".png"
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
      cod: 0
    };
    return wf;
  }
}
