import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Feed} from "./news.models";

@Injectable()
export class NewsService {
  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
  constructor(private http: Http) {
  }
  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .map(res => <Feed>res.json());
  }
}
