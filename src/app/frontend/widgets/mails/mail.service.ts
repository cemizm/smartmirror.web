import {Injectable} from "@angular/core";
import {WidgetDataUtils} from "../utils/widget.data.utils";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MailService {

  private widgetDataUtils: WidgetDataUtils;
  private mailList: Array<any>;
  private _mailListSubject: Subject<any>;
  private mailListUrl = "./assets/mail-list.json";
  private mailUrl = "./assets/mail.json";


  constructor(private http: Http) {
    this.widgetDataUtils = new WidgetDataUtils(http);
    this.mailList = new Array<any>();
    this._mailListSubject = new Subject<any>();

    this.widgetDataUtils.initialHttpGetRequest(this.mailListUrl).subscribe(data => {
        for (let mail in data.messages) {
          this.widgetDataUtils.initialHttpGetRequest(this.mailUrl).subscribe(mailData => {
            this.mailList.push(mailData);
          });
        }
        this._mailListSubject.next(this.mailList);
      }
    );
  }

  get mailListSubject(): Subject<any> {
    return this._mailListSubject;
  }

}
