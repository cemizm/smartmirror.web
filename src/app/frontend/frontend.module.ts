import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TestComponent} from './test/test.component';
import { SharedModule} from "../shared/shared.module";
import { RouterModule, Routes} from "@angular/router";
import { WeathercurrentComponent} from "./widgets/weathercurrent/weathercurrent.component";
import { WeatherpreviewComponent } from './widgets/weatherpreview/weatherpreview.component';
import { NoteComponent } from './widgets/note/note.component';
import { MailsComponent } from './widgets/mails/mails.component';
import { NewsComponent } from './widgets/news/news.component';
import { CalenderComponent } from './widgets/calender/calender.component';

export const ModuleRoutes: Routes = [
  {path: '', component: TestComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes)
  ],
  declarations: [TestComponent, WeathercurrentComponent, NoteComponent, WeatherpreviewComponent, NewsComponent, CalenderComponent, MailsComponent]
})
export class FrontendModule {
}
