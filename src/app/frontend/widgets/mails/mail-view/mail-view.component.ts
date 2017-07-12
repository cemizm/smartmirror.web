import {Component, Input, OnInit} from "@angular/core";
import {MailSettings, Message, MessagesService} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs/Observable";

const interval = 5000;

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  @Input() setting: MailSettings | MailSettings;
  private mailList: Array<Message>;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    Observable.timer(0, interval).subscribe(() => this.update());
  }

  update() {
    if (!this.setting || !this.setting.oAuthToken) {
      return;
    }
    this.messagesService.list(this.setting.oAuthToken, "me").subscribe(mailList => {
      for (let mail of mailList) {
        this.messagesService.get(this.setting.oAuthToken, "me", mail.id, {
          format: "metadata"
        }).subscribe(message => {
          this.mailList.push(message);
        });
      }
    });
  }
}
