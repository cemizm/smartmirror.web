import {Component, Input, OnInit} from "@angular/core";
import {WeatherService} from "../weather.service";
import {WeatherCurrent, WeatherForecast} from "../weather.models";
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

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.polledHttpGetRequestCurrent(this.setting.city).subscribe(data => this.weatherCurrent = this.weatherService.createWeatherCurrent(data));
    this.weatherService.polledHttpGetRequestPreview(this.setting.city).subscribe(data => this.weatherForecast = this.weatherService.createWeatherForecast(data));
    this.weatherService.polledHttpGetRequestPreview(this.setting.city).subscribe(data => this.weatherForecastFirst = this.weatherService.createWeatherForecastFirst(data));
  }
}
