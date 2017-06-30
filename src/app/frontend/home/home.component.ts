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

}
