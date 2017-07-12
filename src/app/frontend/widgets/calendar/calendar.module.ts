import {Input, NgModule, OnInit} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {CalendarViewComponent} from "./calendar-view/calendar-view.component";

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [CalendarViewComponent],
  declarations: [CalendarViewComponent],
  providers: []
})
export class CalendarModule implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
