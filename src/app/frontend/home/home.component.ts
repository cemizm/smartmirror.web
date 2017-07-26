import {Component, NgZone, OnInit} from "@angular/core";
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
  private off: boolean;

  constructor(private ms: MirrorService, private mss: MirrorSettingService, private ts: TicketService, private ngZone: NgZone) {
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

    this.ngZone.runOutsideAngular(() => {
      this.ms.watchUpdates(this.mss.getId()).subscribe(mirror => {
        this.ngZone.run(() => {
          this.mirror = mirror;
          this.ticket = null;
        });
      });
    });

    this.ms.watchControlRequest(this.mss.getId()).subscribe(control => {
      switch (control.action) {
        case "TurnOnRequest":
          this.off = false;
          break;
        case "TurnOffRequest":
          this.off = true;
          break;
      }
    });
  }

}
