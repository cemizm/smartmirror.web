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
  private token = "ya29.GluCBFHu3R8WURR5j4eJWFEWhSVtGELqHcQk5NwTE2sk4XHeCpCTatSoWGlF2I0NVmkMryEtZ-908xqF9-42hhshO7gvXOdb5ls1I79e4sjrMXXgKcTHY3BH0s2V";


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
