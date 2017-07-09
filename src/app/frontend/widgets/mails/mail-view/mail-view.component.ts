import {Component, Input, OnInit} from "@angular/core";
import {MailSettings, Message} from "@cemizm/smartmirror-shared";
import {MailService} from "../mail.service";

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
    this.mailService.mailListSubject.subscribe(data => this.mailList = data);
  }
}
