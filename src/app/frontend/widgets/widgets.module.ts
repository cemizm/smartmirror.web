import {NgModule} from "@angular/core";
import {CalendarModule} from "./calendar/calendar.module";
import {SharedModule} from "../../shared/shared.module";
import {WeatherModule} from "./weather/weather.module";
import {MailsComponent} from "./mails/mails.component";
import {NoteComponent} from "./note/note.component";
import {NewsModule} from "./news/news.module";

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
    NoteComponent
  ],
  declarations: [
    MailsComponent,
    NoteComponent
  ]
})
export class WidgetsModule {
}
