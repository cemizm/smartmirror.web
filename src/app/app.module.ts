import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {SmartMirrorModule} from "@cemizm/smartmirror-shared";
import {WeathercurrentComponent} from "./frontend/widgets/weather/weathercurrent/weathercurrent.component";
import {WidgetsModule} from "./frontend/widgets/widgets.module";
import {WeatherpreviewComponent} from "./frontend/widgets/weather/weatherpreview/weatherpreview.component";
import {NewsViewComponent} from "./frontend/widgets/news/news-view/news-view.component";
import {CalendarViewComponent} from "./frontend/widgets/calendar/calendar-view/calendar-view.component";
import {MailViewComponent} from "./frontend/widgets/mails/mail-view/mail-view.component";
import {NoteComponent} from "./frontend/widgets/note/note.component";

export const AppRoutes: Routes = [
  {path: 'frontend', loadChildren: './frontend/frontend.module#FrontendModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '', redirectTo: '/frontend', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    WeathercurrentComponent,
    WeatherpreviewComponent,
    CalendarViewComponent,
    NewsViewComponent,
    MailViewComponent,
    NoteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    WidgetsModule,

    SmartMirrorModule.forRoot({apiUrl: environment.api}),

    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
