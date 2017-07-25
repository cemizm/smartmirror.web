import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {NewsService} from "../news.service";
import {FeedRSS} from "../news.models";
import {NewsSetting} from "@cemizm/smartmirror-shared";
import {Observable, Subscription} from "rxjs";

const interval = 1000 * 60 * 1;

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnDestroy, OnInit {

  private feedRss: FeedRSS;
  private sub: Subscription;

  @Input() setting: NewsSetting | NewsSetting;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.sub = Observable.timer(0, interval).subscribe(() => this.update());
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

  update() {
    if (!this.setting || !this.setting.feedUrl) {
      return;
    }
    this.newsService.getFeed(this.setting.feedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(this.setting.maxCount);
    });
  }
}
