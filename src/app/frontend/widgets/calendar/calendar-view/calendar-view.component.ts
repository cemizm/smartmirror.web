import {Component, Input, OnInit} from '@angular/core';
import {CalendarSettings} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @Input() setting: CalendarSettings;
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
