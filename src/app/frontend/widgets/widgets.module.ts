import {NgModule} from "@angular/core";
import {CalendarModule} from "./calendar/calendar.module";
import {SharedModule} from "../../shared/shared.module";
import {WeatherModule} from "./weather/weather.module";
import {MailModule} from "./mails/mail.module";
import {NoteComponent} from "./note/note.component";
import {NewsModule} from "./news/news.module";
import {TodayComponent} from "./today/today.component";
import {WidgetContainerComponent} from "./widget-container.component";

@NgModule({
  imports: [
    SharedModule,
    CalendarModule,
    WeatherModule,
    NewsModule,
    MailModule
  ],
  exports: [
    CalendarModule,
    WeatherModule,
    NewsModule,
    MailModule,
    NoteComponent,
    TodayComponent,
    WidgetContainerComponent
  ],
  declarations: [
    NoteComponent,
    TodayComponent,
    WidgetContainerComponent
  ]
})
export class WidgetsModule {
}
