export interface Feed {
  status: string;
  feedInfo: FeedInfo;
  feedEntry: FeedEntry[];
}
export interface FeedInfo {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}
export interface FeedEntry {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure[];
  categories: Categories[];
}
export interface Enclosure {
  enclosure: string;
}
export interface Categories {
  categories: string;
}
