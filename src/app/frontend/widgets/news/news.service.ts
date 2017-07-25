import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {FeedRSS} from "./news.models";
import "rxjs/add/observable/interval";
import * as moment from "moment";


@Injectable()
export class NewsService {
  private url = 'https://api.rss2json.com/v1/api.json';

  constructor(private http: Http) {
  }

  getFeed(url: string): Observable<FeedRSS> {
    return this.http.get(this.url, {
      params: {
        'rss_url': url,
        "api_key": 'xtlvhz8u6yjakvlvuwkcggj80kwpmidajouefmpu'
      }
    }).map(res => <FeedRSS>res.json())
      .map(feed=> {
        for (const item of feed.items) {
          if (item.pubDate)
            item.pubDate = moment(item.pubDate).add(2, "hour").toDate();
        }

        return feed;
      });
  }
}
