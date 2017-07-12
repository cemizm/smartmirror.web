import {Component, Input, OnInit} from "@angular/core";
import {MailSettings, Message} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs/Observable";
import {MailService} from "../mail.service";

const interval = 5000;

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  @Input() setting: MailSettings | MailSettings;
  private mailList: Array<Message>;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    Observable.timer(0, interval).subscribe(() => this.update());
  }

  update() {
    if (!this.setting || !this.setting.oAuthToken) {
      return;
    }
    this.mailService.getMails(this.setting.oAuthToken, this.setting.maxCount).subscribe(mails => this.mailList = mails);
  }
}
