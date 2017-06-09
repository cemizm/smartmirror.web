import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  tiles = [
    {text: 'News1', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'News2', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'News3', cols: 1, rows: 1, color: 'lightgrey'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
