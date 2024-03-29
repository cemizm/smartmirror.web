import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";

import {
  City,
  Coord,
  MainInformationForecast,
  WeatherCurrent,
  WeatherForecast,
  WeatherInformation,
  WeatherListItem
} from "./weather.models";

const APPID = '70e703682e7eeff15a6ce5ee7635f37e';


@Injectable()
export class WeatherService {

  private baseUrl = 'http://api.openweathermap.org/data/2.5/';
  private interval = 1000 * 60 * 30;
  errorMessage: string;

  constructor(private http: Http) {
  }

  createWeatherCurrent(data: WeatherCurrent) {
    data.weather[0].id = "owf owf-" + data.weather[0].id;
    data.dt *= 1000;
    return data;
  }

  createWeatherForecast(data: any) {
    let weatherList: Array<WeatherListItem> = [];
    let counter = 0;
    let count = 1;
    let datumNow = " ";
    let datum = " ";
    let datum2 = " ";
    let dateMilli = 0;
    let temp = 0;
    let dict: { [id: string]: number; } = {};

    data.list.forEach(element => {
      if (counter > 32) {
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
        id: "owf owf-" + element.weather[0].id,
        main: "",
        description: "",
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
      if (datumNow === " ") {
        datumNow = new Date(Date.now()).toString();
        const daten = datumNow.split(" ");
        datumNow = daten[1] + daten[2] + daten[3];
      }
      if (datum === " ") {
        datum = new Date(weatherListItem.dt).toString();
        const daten = datum.split(" ");
        datum = daten[1] + daten[2] + daten[3];
        dateMilli = weatherListItem.dt;
        if (datum === datumNow) {
          datum = " ";
        }
      }
      if (datum !== " " && datum2 === " ") {
        datum2 = new Date(weatherListItem.dt).toString();
        const daten = datum2.split(" ");
        datum2 = daten[1] + daten[2] + daten[3];
        if (datum === datum2) {
          datum2 = " ";
        }
      }
      if (datum !== " " && datum2 !== " " && count > 7) {
        mainInformationForecast.temp = temp / count;
        weatherListItem.dt = dateMilli;
        let icon = " ";
        let iconCount = 0;
        for (let iconDict in dict) {
          if (dict[iconDict] > iconCount) {
            icon = iconDict;
            iconCount = dict[iconDict];
          }
        }
        weatherInformation.icon = icon;
        weatherList.push(weatherListItem);
        dateMilli = 0;
        datum = " ";
        datum2 = " ";
        temp = 0;
        count = 1;
        dict = {};
      } else {
        temp += mainInformationForecast.temp;
        count++;
        let dictAdd = false;
        for (let iconDict in dict) {
          if (iconDict === weatherInformation.icon) {
            dict[iconDict]++;
            dictAdd = true;
          }
        }
        if (dictAdd === false) {
          dict[weatherInformation.icon] = 1;
        }
      }
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

  createWeatherForecastFirst(data: any) {
    let weatherList: Array<WeatherListItem> = [];
    let counter = 0;
    let firstThree = 0;

    data.list.forEach(element => {
      if (counter > 32) {
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
        id: "owf owf-" + element.weather[0].id,
        main: "",
        description: "",
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
      if (firstThree < 3) {
        weatherList.push(weatherListItem);
        firstThree++;
      }
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

  polledHttpGetRequestCurrent(city: string): Observable<any> {
    return Observable.timer(0, this.interval)
      .switchMap(() => this.http.get(this.baseUrl + "weather", {
        params: {
          'q': city,
          'appid': APPID,
          'units': "metric"
        }
      }).map(res => res.json()));
  }

  polledHttpGetRequestPreview(city: string): Observable<any> {
    return Observable.timer(0, this.interval)
      .switchMap(() => this.http.get(this.baseUrl + "forecast", {
        params: {
          'q': city,
          'appid': APPID,
          'units': "metric"
        }
      }).map(res => res.json()));
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
