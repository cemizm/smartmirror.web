import {Component} from "@angular/core";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent {
  private date;

  constructor() {
    this.date = new Date();

    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
