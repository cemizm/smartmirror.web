import {Component, OnInit} from "@angular/core";
import {Mirror, MirrorService, Ticket, TicketService, Widget, WidgetSide, WidgetType} from "@cemizm/smartmirror-shared";
import {MirrorSettingService} from "../../shared/services/mirror-setting.service";
import {Observable} from "rxjs/Observable";
import {WeathercurrentComponent} from "../widgets/weather/weathercurrent/weathercurrent.component";
import {NewsViewComponent} from "../widgets/news/news-view/news-view.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private ticket: Ticket;
  private mirror: Mirror;
  private rightSide: number;
  private widgetsLeft: Observable<Array<Widget>>;
  private widgetsRight: Observable<Array<Widget>>;


  constructor(private ms: MirrorService, private mss: MirrorSettingService, private ts: TicketService) {
  this.rightSide = WidgetSide.Right;

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
        return WeathercurrentComponent;
      case WidgetType.News:
        return NewsViewComponent;
    }
  }

}
