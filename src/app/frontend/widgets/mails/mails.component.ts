import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {

  mails = [
    {
      absender: 'Absender1',
      date: new Date('1/1/16'),
      betreff: 'Ich bin ein Betreff',
    },
    {
      absender: 'Absender2',
      date: new Date('1/17/16'),
      betreff: 'Ich bin auch ein Betreff',
    },
    {
      absender: 'Absender3',
      date: new Date('1/28/16'),
      betreff: 'Ich bin der letzte Betreff',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
