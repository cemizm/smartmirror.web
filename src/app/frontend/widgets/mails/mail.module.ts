import {Input, NgModule, OnInit} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {MailViewComponent} from "./mail-view/mail-view.component";

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [MailViewComponent],
  declarations: [MailViewComponent],
  providers: []
})
export class MailModule { }
