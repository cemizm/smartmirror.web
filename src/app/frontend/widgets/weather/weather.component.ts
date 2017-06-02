import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  private test: string;
  private marginHigh: number;
  private marginWidth: number;
  private marginTop: number;
  private marginLeft: number;

  constructor() {
    this.test = "Hallo Welt!";
    this.marginHigh = 100;
    this.marginWidth = 50;
    this.marginTop = 200;
    this.marginLeft = 150;
  }

  ngOnInit() {
  }

}
