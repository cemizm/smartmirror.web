import {Input, NgModule, OnInit} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {MailService} from "./mail.service";
import {MailViewComponent} from "./mail-view/mail-view.component";

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [MailViewComponent],
  declarations: [MailViewComponent],
  providers: [MailService]
})
export class MailModule { }
