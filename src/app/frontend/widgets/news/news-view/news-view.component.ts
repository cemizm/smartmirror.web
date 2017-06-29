import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";
import {Feed} from "../news.models";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  private feed: Feed;

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.newsService.getFeedContent("http://www.tagesschau.de/xml/rss2").subscribe(feed => this.feed = feed);
  }

}
