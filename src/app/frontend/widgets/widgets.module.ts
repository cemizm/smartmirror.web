import {NgModule} from "@angular/core";
import {CalendarModule} from "./calendar/calendar.module";
import {SharedModule} from "../../shared/shared.module";
import {WeatherModule} from "./weather/weather.module";
import {MailsComponent} from "./mails/mails.component";
import {NewsComponent} from "./news/news.component";
import {NoteComponent} from "./note/note.component";

@NgModule({
  imports: [
    SharedModule,
    CalendarModule,
    WeatherModule,
  ],
  exports: [
    CalendarModule,
    WeatherModule,
    MailsComponent,
    NewsComponent,
    NoteComponent
  ],
  declarations: [
    MailsComponent,
    NewsComponent,
    NoteComponent
  ]
})
export class WidgetsModule {
}
