import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendermonth',
  templateUrl: './calendermonth.component.html',
  styleUrls: ['./calendermonth.component.scss']
})
export class CalendermonthComponent implements OnInit {

  tiles = [
    {text: 'Mo', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Tu', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'We', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Th', cols: 1, rows: 1, color: 'grey'},
    {text: 'Fr', cols: 1, rows: 1, color: 'blue'},
    {text: 'Sa', cols: 1, rows: 1, color: 'red'},
    {text: 'Su', cols: 1, rows: 1, color: 'yellow'},
    {text: '1', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '2', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '3', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '4', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '5', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '6', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '7', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '8', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '9', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '10', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '11', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '12', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '13', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '14', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '15', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '16', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '17', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '18', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '19', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '20', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '21', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '22', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '23', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '24', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '25', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '26', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '27', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '28', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '29', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '30', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '31', cols: 1, rows: 1, color: 'lightgray'},
    {text: '/', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '/', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '/', cols: 1, rows: 1, color: 'lightgrey'},
    {text: '/', cols: 1, rows: 1, color: 'lightgrey'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
