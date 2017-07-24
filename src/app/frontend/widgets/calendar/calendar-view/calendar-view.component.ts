import {Component, Input, OnInit} from "@angular/core";
import {CalendarSettings, Event, EventsService} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs";

const UPDATE_INTERVAL = 1000 * 60 * 1 / 12;

interface GroupedEvent {
  day: Date;
  events: Event[];
}

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  private events: Array<GroupedEvent>;

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

      events = events.slice(0, this.setting.maxCount);

      this.events = new Array<GroupedEvent>();

      let keys = {};

      let group: GroupedEvent = null;
      for (const event of events) {
        let date: any = event.start.date;
        if (!date) {
          date = event.start.dateTime as any;
        }

        if (!date)
          continue;

        date = new Date(date);

        let key = date.getDate().valueOf();

        group = keys[key];

        if (!group) {
          group = {
            day: date,
            events: new Array<Event>()
          }
          keys[key] = group;
          this.events.push(group);
        }

        group.events.push(event);
      }
    });
  }
}
