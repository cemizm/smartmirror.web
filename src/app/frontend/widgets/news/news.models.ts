export interface FeedRSS {
  status: string;
  feed: Feed;
  items: Items[];
}
export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}
export interface Items {
  title: string;
  pubDate: Date;
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
