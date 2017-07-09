import {Component, Input, OnInit} from "@angular/core";
import {CalendarSettings, Event} from "@cemizm/smartmirror-shared";
import {CalendarService} from "../calendar.service";

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  private calEventList: Array<Event>;

  @Input() setting: CalendarSettings | CalendarSettings;

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.calendarService.calEventListSubject.subscribe(data => this.calEventList = data);
  }
}
