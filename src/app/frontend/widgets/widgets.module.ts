import {NgModule} from "@angular/core";
import {CalendarModule} from "./calendar/calendar.module";
import {SharedModule} from "../../shared/shared.module";
import {WeatherModule} from "./weather/weather.module";
import {MailsComponent} from "./mails/mails.component";
import {NoteComponent} from "./note/note.component";
import {NewsModule} from "./news/news.module";
import {TodayComponent} from "./today/today.component";
import {WidgetContainerComponent} from "./widget-container.component";
import { WidgetDataUtils } from "./utils/widget.data.utils";

@NgModule({
  imports: [
    SharedModule,
    CalendarModule,
    WeatherModule,
    NewsModule,
  ],
  exports: [
    CalendarModule,
    WeatherModule,
    NewsModule,
    MailsComponent,
    NoteComponent,
    TodayComponent,
    WidgetContainerComponent
  ],
  declarations: [
    MailsComponent,
    NoteComponent,
    TodayComponent,
    WidgetContainerComponent
  ]
})
export class WidgetsModule {
}
