import {Component, OnInit} from "@angular/core";
import {MirrorService} from "@cemizm/smartmirror-shared";
import {MirrorSettingService} from "../../shared/services/mirror-setting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor(private ms: MirrorService, private mss: MirrorSettingService, private router: Router) {
  }

  ngOnInit() {
    this.ms.getById(this.mss.getId()).subscribe(mirror => {
      this.router.navigateByUrl('/frontend/home');
    }, err => {
      if (err.status === 404) {
        this.router.navigateByUrl('/frontend/ticket');
      }
    });

  }


}
