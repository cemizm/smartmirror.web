import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {FeedRSS} from "./news.models";
import 'rxjs/add/observable/interval';


@Injectable()
export class NewsService {
  private rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json';
  private interval = 1000 * 60 * 30;

  constructor(private http: Http) {
  }
  getFeedContent(url: string): Observable<FeedRSS> {
    return this.http.get(this.rssToJsonServiceBaseUrl, {
      params: {
        'rss_url': url
      }
    }).map(res => <FeedRSS>res.json());
  }
    polledHttpGetRequest(url: string): Observable<FeedRSS> {
    return Observable.interval(this.interval)
      .switchMap(() => this.http.get(this.rssToJsonServiceBaseUrl, {
        params: {
          'rss_url': url
        }
      }).map(res => <FeedRSS>res.json()));
  }
}
