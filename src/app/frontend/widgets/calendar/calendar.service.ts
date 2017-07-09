import { Injectable } from '@angular/core';
import {WidgetDataUtils} from "../utils/widget.data.utils";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CalendarService {

  private widgetDataUtils: WidgetDataUtils;
  private calEventList: any;
  private _calEventListSubject: Subject<any>;
  private calendarUrl = "./assets/cal-event-list.json";


  constructor(private http: Http) {
    this.widgetDataUtils = new WidgetDataUtils(http);
    this._calEventListSubject = new Subject<any>();

    this.widgetDataUtils.initialHttpGetRequest(this.calendarUrl).subscribe(data => {
        this.calEventList = data;
        this._calEventListSubject.next(this.calEventList);
      }
    );
  }

  get calEventListSubject(): Subject<any> {
    return this._calEventListSubject;
  }

}
