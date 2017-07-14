import { Component, OnInit, Input } from '@angular/core';
import {WeatherService} from "../weather.service";
import {WeatherForecast, WeatherCurrent} from "../weather.models";
import {WeatherSetting} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {
  private weatherForecast: WeatherForecast;
  private weatherForecastFirst: WeatherForecast;
  private weatherCurrent: WeatherCurrent;
  @Input() setting: WeatherSetting | WeatherSetting;
  city = 'bielefeld';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.initialHttpGetRequestCurrent(this.city)
      .subscribe(data => this.weatherCurrent = this.weatherService.createWeatherCurrent(data));
    this.weatherService.polledHttpGetRequestCurrent(this.city).subscribe(data => this.weatherForecast = data);
    this.weatherService.initialHttpGetRequestPreview(this.city)
      .subscribe(data => this.weatherForecast = this.weatherService.createWeatherForecast(data));
    this.weatherService.polledHttpGetRequestPreview(this.city).subscribe(data => this.weatherForecast = data);
    this.weatherService.initialHttpGetRequestPreview(this.city)
      .subscribe(data => this.weatherForecastFirst = this.weatherService.createWeatherForecastFirst(data));
    this.weatherService.polledHttpGetRequestPreview(this.city).subscribe(data => this.weatherForecastFirst = data);
  }
}
