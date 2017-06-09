import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weathercurrent',
  templateUrl: './weathercurrent.component.html',
  styleUrls: ['./weathercurrent.component.scss']
})

export class WeathercurrentComponent implements OnInit {
  tiles = [
    {text: 'DayDate', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Temp', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Bild', cols: 1, rows: 1, color: 'lightpink'},
  ];
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
