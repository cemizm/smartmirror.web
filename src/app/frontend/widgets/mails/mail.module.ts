import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {MailViewComponent} from "./mail-view/mail-view.component";
import {MailService} from "./mail.service";

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [MailViewComponent],
  declarations: [MailViewComponent],
  providers: [MailService]
})
export class MailModule {
}
