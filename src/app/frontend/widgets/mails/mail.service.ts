import {Injectable} from "@angular/core";
import {WidgetDataUtils} from "../utils/widget.data.utils";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";
import {Message, MessagesService} from "@cemizm/smartmirror-shared";

@Injectable()
export class MailService {

  private widgetDataUtils: WidgetDataUtils;
  private mailList: Array<Message>;
  private _mailListSubject: Subject<any>;
  private token = "ya29.GluCBIJUy_eldS0UEnsd7EleZfYZy81MDdR3X-M5PfpDE_DMVp9TWxPl_yVKlMd2yg6AEC7W03va1QK9Nx3EUuN9e0X2g2vR_1ftO2scCLj4_lBhQhr60jlmSrx4";
  
  constructor(private http: Http, private messagesService: MessagesService) {
    this.widgetDataUtils = new WidgetDataUtils(http);
    this.mailList = new Array<any>();
    this.mailList = new Array<Message>();
    this._mailListSubject = new Subject<any>();

    messagesService.list(this.token, "me").subscribe(data => {
      for (let mail of data) {
        messagesService.get(this.token, "me", mail.id, {

          format: "metadata"
        }).subscribe(mailData => {
          this.mailList.push(mailData);
        });
      }
      this._mailListSubject.next(this.mailList);
    });
  }

  get mailListSubject(): Subject<any> {
    return this._mailListSubject;
  }

}
