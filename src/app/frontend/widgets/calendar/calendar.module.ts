import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {CalendarViewComponent} from "./calendar-view/calendar-view.component";

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [CalendarViewComponent],
  declarations: [CalendarViewComponent]
})
export class CalendarModule {
}
