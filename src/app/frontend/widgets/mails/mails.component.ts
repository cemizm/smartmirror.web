import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {

  folders = [
    {
      absender: 'Photos',
      date: new Date('1/1/16'),
      betreff: 'Ich bin ein Betreff',
    },
    {
      absender: 'Recipes',
      date: new Date('1/17/16'),
      treff: 'Ich bin ein Betreff',
    },
    {
      absender: 'Work',
      date: new Date('1/28/16'),
      treff: 'Ich bin ein Betreff',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
