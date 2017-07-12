import {Component, Input, OnInit} from "@angular/core";
import {CalendarSettings, Event, EventsService} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs";

const UPDATE_INTERVAL = 1000 * 60 * 0.5;

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  private calEventList: Array<Event>;

  @Input() setting: CalendarSettings | CalendarSettings;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    Observable.timer(0, UPDATE_INTERVAL).subscribe(() => this.update());
  }

  update() {
    this.eventsService.list(this.setting.oAuthToken, "primary",
      {
        orderBy: "startTime",
        singleEvents: true,
        timeMin: new Date().toISOString()
      }).subscribe(events => {
      this.calEventList = events;
    });
  }
}
