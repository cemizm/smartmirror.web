import {Injectable} from "@angular/core";
import {Message, MessagesService} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs";

@Injectable()
export class MailService {

  constructor(private messagesService: MessagesService) {
  }


  getMails(token: string, maxCount: number = 5, unread: boolean, userId: string = "me"): Observable<Array<Message>> {
    return this.messagesService.list(token, userId)
      .concatMap(mails => Observable.from(mails).take(maxCount))
      .concatMap(mail => this.messagesService.get(token, userId, mail.id, {format: "metadata"}))
      .toArray();
  }

}
