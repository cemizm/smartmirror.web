import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  private date;

  constructor() {
    this.date =  new Date();

    setInterval(() => {
      this.date =  new Date();
    }, 1000);
  }

  ngOnInit() {
  }

}
