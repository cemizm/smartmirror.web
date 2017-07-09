import {Component, Input, OnInit} from "@angular/core";
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
  @Input() setting: NewsSetting | NewsSetting;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getFeed();
  }

  getFeed() {
    this.newsService.getFeedContent(this.setting.feedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.setting.maxCount);
    });
  }

  getpolledFeed() {
    this.newsService.polledHttpGetRequest(this.setting.feedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.setting.maxCount);
    });
  }
}
