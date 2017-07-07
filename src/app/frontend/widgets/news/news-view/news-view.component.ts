import {Component, OnInit, Input} from '@angular/core';
import {NewsService} from "../news.service";
import {FeedRSS} from "../news.models";
import {NewsSetting} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  private feedRss: FeedRSS;
  private feedUrl: string;
  private maxCount: number;
  @Input() setting: NewsSetting;

  constructor(private newsService: NewsService) {

  }
  ngOnInit() {
    this.feedUrl = this.setting.feedUrl;
    this.maxCount = this.setting.maxCount;
    this.getpolledFeed();
  }
  getFeed() {
    this.newsService.getFeedContent(this.feedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.maxCount);
    });
  }
  getpolledFeed() {
    this.newsService.polledHttpGetRequest(this.setting.feedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.setting.maxCount);
    });
  }
}
