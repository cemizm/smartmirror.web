import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weathercurrent',
  templateUrl: './weathercurrent.component.html',
  styleUrls: ['./weathercurrent.component.scss']
})

export class WeathercurrentComponent implements OnInit {
  tiles = [
    {text: 'Stadt', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Temp', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Bild', cols: 1, rows: 1, color: 'lightpink'},
  ];
  private test: string;
  private marginHigh: number;
  private marginWidth: number;
  private marginTop: number;
  private marginLeft: number;

  weatherData: any[];
  errorMessage: string;



  getWeather() {
    return this.weatherService.getWeather();
  }

  constructor(private weatherService: WeatherService) {
    this.test = "Hallo Welt!";
    this.marginHigh = 100;
    this.marginWidth = 50;
    this.marginTop = 200;
    this.marginLeft = 150;
  }

  ngOnInit() {

    this.getWeather().subscribe(data => {
      this.tiles[0].text = data.city.name;
      this.tiles[1].text = data.list[0].main.temp;
      this.tiles[2].text = data.list[0].weather[0].main;
    });

    this.weatherService.getWeatherForecast("Bielefeld")
      .subscribe(data => {this.weatherData = data},
        error =>  this.errorMessage = <any>error,
      );
  }

}
