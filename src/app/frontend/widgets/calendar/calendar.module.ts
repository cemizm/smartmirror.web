import {Input, NgModule, OnInit} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {CalendarViewComponent} from "./calendar-view/calendar-view.component";
import {CalendarService} from "./calendar.service";

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [CalendarViewComponent],
  declarations: [CalendarViewComponent],
  providers: [CalendarService]
})
export class CalendarModule implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
