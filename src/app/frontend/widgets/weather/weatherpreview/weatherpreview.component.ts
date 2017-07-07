import { Component, OnInit, Input } from '@angular/core';
import {WeatherForecast} from "../weather.models";
import {WeatherService} from "../weather.service";
import {WeatherSetting} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-weatherpreview',
  templateUrl: './weatherpreview.component.html',
  styleUrls: ['./weatherpreview.component.scss']
})
export class WeatherpreviewComponent implements OnInit {
  private weatherForecast: WeatherForecast;
  @Input() setting: WeatherSetting | WeatherSetting;

  tiles = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'DayDate', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'DayDate', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'DayDate', cols: 1, rows: 1, color: 'green'},
    {text: 'DayDate', cols: 1, rows: 1, color: 'blue'},
    {text: 'DayDate', cols: 1, rows: 1, color: 'red'},
    {text: 'Bild', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Bild', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Bild', cols: 1, rows: 1, color: 'green'},
    {text: 'Bild', cols: 1, rows: 1, color: 'blue'},
    {text: 'Bild', cols: 1, rows: 1, color: 'red'},
  ];
  tempTiles = [
    {cols: 1, rows: 4, color: 'lightgrey'},
    {cols: 1, rows: 4, color: 'lightgrey'},
    {cols: 1, rows: 4, color: 'lightgrey'},
    {cols: 1, rows: 4, color: 'lightgrey'},
    {cols: 1, rows: 4, color: 'lightgrey'},
  ];
  timeTiles = [
    {cols: 1, rows: 4, color: 'grey'},
  ];
  temp = [
    {text1: '24°C',
      text2: '25°C',
      text3: '22°C',
      text4: '26°C',
      text5: '28°C',
      text6: '29°C',
      text7: '17°C',
      text8: '16°C'},
  ];
  time = [
    {text1: '00:00',
      text2: '03:00',
      text3: '06:00',
      text4: '09:00',
      text5: '12:00',
      text6: '15:00',
      text7: '18:00',
      text8: '21:00'},
  ];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherForecastSubject().subscribe(data => this.weatherForecast = data);
  }

}
