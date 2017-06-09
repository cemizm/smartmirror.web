import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calenderday',
  templateUrl: './calenderday.component.html',
  styleUrls: ['./calenderday.component.scss']
})
export class CalenderdayComponent implements OnInit {

  tiles = [
    {text: 'Time', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'meeting', cols: 3, rows: 1, color: 'lightpink'},
    {text: 'Inhalt', cols: 1, rows: 1, color: 'lightgrey'},
    {text: 'Inhalt', cols: 3, rows: 1, color: 'lightgrey'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
