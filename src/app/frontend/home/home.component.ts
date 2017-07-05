import {Component, OnInit} from "@angular/core";
import {Mirror, MirrorService, Ticket, TicketService, Widget, WidgetSide, WidgetType} from "@cemizm/smartmirror-shared";
import {MirrorSettingService} from "../../shared/services/mirror-setting.service";
import {Observable} from "rxjs/Observable";
import {NewsViewComponent} from "../widgets/news/news-view/news-view.component";
import {CalendarViewComponent} from "../widgets/calendar/calendar-view/calendar-view.component";
import {MailsComponent} from "../widgets/mails/mails.component";
import {NoteComponent} from "../widgets/note/note.component";
import {WeatherpreviewComponent} from "../widgets/weather/weatherpreview/weatherpreview.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private ticket: Ticket;
  private mirror: Mirror;

  constructor(private ms: MirrorService, private mss: MirrorSettingService, private ts: TicketService) {
  }

  ngOnInit() {
    this.ms.getById(this.mss.getId()).subscribe(mirror => {
        this.mirror = mirror;
      },
      err => {
        if (err.status === 404) {
          this.ts.get(this.mss.getId()).subscribe(ticket => {
            this.ticket = ticket;
          });
        }
      });
  }

  load(widget: Widget) {
    switch (widget.type) {
      case WidgetType.Weather:
        return WeatherpreviewComponent;
      case WidgetType.Calender:
        return CalendarViewComponent;
      case WidgetType.News:
        return NewsViewComponent;
      case WidgetType.Mails:
        return MailsComponent;
      case WidgetType.Notes:
        return NoteComponent;
    }
  }

}
