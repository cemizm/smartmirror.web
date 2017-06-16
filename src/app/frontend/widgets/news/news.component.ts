import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [
    {image: '', title: '1', date: new Date(), excerpt: ''},
    {image: '', title: '2', date: new Date(), excerpt: ''},
    {image: '', title: '3', date: new Date(), excerpt: ''},
    {image: '', title: '4', date: new Date(), excerpt: ''}
    ];
  constructor() { }
  ngOnInit() {
  }

}
