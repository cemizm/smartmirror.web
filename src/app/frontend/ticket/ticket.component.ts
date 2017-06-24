import {Component, OnInit} from "@angular/core";
import {Ticket, TicketService} from "@cemizm/smartmirror-shared";
import {MirrorSettingService} from "../../shared/services/mirror-setting.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  private ticket: Ticket;

  constructor(private ts: TicketService, private mss: MirrorSettingService) {
  }

  ngOnInit() {

    this.ts.get(this.mss.getId()).subscribe(ticket => {
      this.ticket = ticket;
    });
  }


}
