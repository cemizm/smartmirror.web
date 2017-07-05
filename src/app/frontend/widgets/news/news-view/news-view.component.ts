import {Component, OnInit, Input, DoCheck} from '@angular/core';
import {NewsService} from "../news.service";
import {FeedRSS} from "../news.models";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  private feedRss: FeedRSS;
  @Input() settings: any;

  constructor(private newsService: NewsService) {

  }
  ngOnInit() {
     console.log(this.settings);
    this.getFeed();
  }
  getFeed() {
    this.newsService.getFeedContent(this.settings.FeedUrl).subscribe(data => {
      this.feedRss = data;
      this.feedRss.items.splice(5);
    });
  }
}
