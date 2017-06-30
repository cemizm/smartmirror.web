import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {FeedRSS} from "./news.models";

@Injectable()
export class NewsService {
  private rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json';
  constructor(private http: Http) {
  }
  getFeedContent(url: string): Observable<FeedRSS> {
    return this.http.get(this.rssToJsonServiceBaseUrl, {
      params: {
        'rss_url': url
      }
    }).map(res => <FeedRSS>res.json());
  }
}
