import {Injectable} from "@angular/core";
import {WidgetDataUtils} from "../utils/widget.data.utils";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";
import {CalendarListService, Event, EventsService} from "@cemizm/smartmirror-shared";

@Injectable()
export class CalendarService {

  private widgetDataUtils: WidgetDataUtils;
  private calEventList: Array<Event>;
  private _calEventListSubject: Subject<Array<Event>>;
  private token = "ya29.GluCBIJUy_eldS0UEnsd7EleZfYZy81MDdR3X-M5PfpDE_DMVp9TWxPl_yVKlMd2yg6AEC7W03va1QK9Nx3EUuN9e0X2g2vR_1ftO2scCLj4_lBhQhr60jlmSrx4";


  constructor(private http: Http, private calListService: CalendarListService,
              private eventsService: EventsService) {
    this.widgetDataUtils = new WidgetDataUtils(http);
    this._calEventListSubject = new Subject<Array<Event>>();

    eventsService.list(this.token, "primary",
      {
        orderBy: "startTime",
        singleEvents: true,
        timeMin: new Date().toISOString()
      }).subscribe(eventList => {
      this.calEventList = eventList;
      this._calEventListSubject.next(this.calEventList);
    });
  }

  get calEventListSubject(): Subject<Array<Event>> {
    return this._calEventListSubject;
  }
}
