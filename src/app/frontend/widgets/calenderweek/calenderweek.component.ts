import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calenderweek',
  templateUrl: './calenderweek.component.html',
  styleUrls: ['./calenderweek.component.scss']
})
export class CalenderweekComponent implements OnInit {
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
    {text: 'Zeiten', cols: 1, rows: 8, color: 'grey'},
    {text: 'Temp', cols: 1, rows: 8, color: 'lightgrey'},
    {text: 'Temp', cols: 1, rows: 8, color: 'lightgrey'},
    {text: 'Temp', cols: 1, rows: 8, color: 'lightgrey'},
    {text: 'Temp', cols: 1, rows: 8, color: 'lightgrey'},
    {text: 'Temp', cols: 1, rows: 8, color: 'lightgrey'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
