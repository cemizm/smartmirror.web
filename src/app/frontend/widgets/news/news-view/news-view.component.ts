import {Component, OnInit, Input} from '@angular/core';
import {NewsService} from "../news.service";
import {FeedRSS} from "../news.models";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  private feedRss: FeedRSS;
  private FeedUrl: string;
  private MaxCount: number;
  @Input() settings: any;

  constructor(private newsService: NewsService) {
    this.FeedUrl = "http://www.tageschau.de/xml/rss2";
    this.MaxCount = 5;
  }
  ngOnInit() {
     console.log(this.settings);
    this.getpolledFeed();
  }
  getFeed() {
    this.newsService.getFeedContent(this.FeedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.MaxCount);
    });
  }
  getpolledFeed() {
    this.newsService.polledHttpGetRequest(this.settings.FeedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.settings.MaxCount);
    });
  }
}
