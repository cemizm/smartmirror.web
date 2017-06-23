import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {WeatherCurrent} from "../weather.models";

@Component({
  selector: 'app-weathercurrent',
  templateUrl: './weathercurrent.component.html',
  styleUrls: ['./weathercurrent.component.scss']
})

export class WeathercurrentComponent implements OnInit {
  private weatherCurrent: WeatherCurrent;
  private test: string;
  private marginHigh: number;
  private marginWidth: number;
  private marginTop: number;
  private marginLeft: number;



  constructor(private weatherService: WeatherService) {

    this.test = "Hallo Welt!";
    this.marginHigh = 100;
    this.marginWidth = 50;
    this.marginTop = 200;
    this.marginLeft = 150;

  }

  ngOnInit( ) {
    this.weatherService.getCurrentSubject().subscribe(data => this.weatherCurrent = data);
  }

}
