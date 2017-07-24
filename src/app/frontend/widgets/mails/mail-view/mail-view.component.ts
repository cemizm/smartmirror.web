import {Component, Input, OnInit} from "@angular/core";
import {MailSettings} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs/Observable";
import {MailService} from "../mail.service";

const interval = 5000;

interface MailItem {
  subject: string;
  from: string;
  date: Date;
  snippet: string;
}

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  @Input() setting: MailSettings | MailSettings;
  private mails: Array<MailItem>;

  constructor(private mailService: MailService) {
  }

  ngOnInit() {
    Observable.timer(0, interval).subscribe(() => this.update());
  }

  update() {
    if (!this.setting || !this.setting.oAuthToken) {
      return;
    }
    this.mailService.getMails(this.setting.oAuthToken, this.setting.maxCount, this.setting.unread).subscribe(mails => {
      this.mails = new Array<MailItem>();

      for (const item of mails) {
        let subject: string = null;
        let from: string = null;
        let date: Date = null;

        for (const head of item.payload.headers) {
          if (head.name == "Date")
            date = new Date(head.value);

          if (head.name == "Subject")
            subject = head.value;

          if (head.name == "From")
            from = head.value;
        }

        if (from && from.indexOf("<") > 0) {
          from = from.substr(0, from.indexOf("<"));
        }

        this.mails.push({
          subject,
          from,
          date,
          snippet: item.snippet,
        });
      }

    });
  }
}
