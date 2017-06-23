import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {NewsViewComponent} from "./news-view/news-view.component";
import {NewsService} from "./news.service";

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NewsViewComponent],
  declarations: [NewsViewComponent],
  providers:[NewsService]
})
export class NewsModule { }
