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
  private weatherCurrent: WeatherCurrent;
  @Input() setting: WeatherSetting;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherForecastSubject().subscribe(data => this.weatherForecast = data);
    this.weatherService.getWeatherCurrentSubject().subscribe(data => this.weatherCurrent = data);
  }

}
