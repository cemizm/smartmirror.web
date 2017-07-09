import {NgModule} from "@angular/core";
import {CalendarModule} from "./calendar/calendar.module";
import {SharedModule} from "../../shared/shared.module";
import {WeatherModule} from "./weather/weather.module";
import {MailModule} from "./mails/mail.module";
import {NewsModule} from "./news/news.module";
import {TodayComponent} from "./today/today.component";
import {WidgetContainerComponent} from "./widget-container.component";
import {NoteModule} from "./note/note.module";

@NgModule({
  imports: [
    SharedModule,
    CalendarModule,
    WeatherModule,
    NewsModule,
    MailModule,
    NoteModule
  ],
  exports: [
    CalendarModule,
    WeatherModule,
    NewsModule,
    MailModule,
    NoteModule,
    TodayComponent,
    WidgetContainerComponent
  ],
  declarations: [
    TodayComponent,
    WidgetContainerComponent
  ]
})
export class WidgetsModule {
}
