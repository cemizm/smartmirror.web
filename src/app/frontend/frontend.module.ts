import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test/test.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {WeathercurrentComponent} from "./widgets/weathercurrent/weathercurrent.component";
import { WeatherpreviewComponent } from './widgets/weatherpreview/weatherpreview.component';
import { NoteComponent } from './widgets/note/note.component';
import { MailsComponent } from './widgets/mails/mails.component';
import { NewsComponent } from './widgets/news/news.component';
import { CalenderdayComponent } from './widgets/calenderday/calenderday.component';
import { CalenderweekComponent } from './widgets/calenderweek/calenderweek.component';
import { CalendermonthComponent } from './widgets/calendermonth/calendermonth.component';

export const ModuleRoutes: Routes = [
  {path: '', component: TestComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes)
  ],
  declarations: [TestComponent, WeathercurrentComponent, NoteComponent, WeatherpreviewComponent, NewsComponent, CalenderdayComponent, MailsComponent, CalenderweekComponent, CalendermonthComponent]
})
export class FrontendModule {
}
