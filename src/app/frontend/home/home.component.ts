import {Component, OnInit} from "@angular/core";
import {Mirror, MirrorService, Ticket, TicketService} from "@cemizm/smartmirror-shared";
import {MirrorSettingService} from "../../shared/services/mirror-setting.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private ticket: Ticket;
  private mirror: Mirror;
  private theme = "smartmirror-theme";

  constructor(private ms: MirrorService, private mss: MirrorSettingService, private ts: TicketService) {
  }

  switchTheme() {
    (this.theme === "smartmirror-theme") ? this.theme = "tv-theme" : this.theme = "smartmirror-theme";
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

    this.ms.watchUpdates(this.mss.getId()).subscribe(mirror => {
      this.mirror = mirror;
      this.ticket = null;
    });
  }

}
