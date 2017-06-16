import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
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
