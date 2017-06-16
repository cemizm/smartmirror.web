import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  dates: Array<string> = ['12.06.2017', '13.06.2017'];
  termineEins = [
    {name: 'Termin1'},
    {name: 'Termin2'},
    {name: 'Termin3'},
  ];
  termineZwei = [
    {name: 'Termin1'},
    {name: 'Termin2'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
