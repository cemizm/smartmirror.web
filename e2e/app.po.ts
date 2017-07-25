import {browser, by, element} from "protractor";

export class SmartMirrorPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getTicketCard() {
    return element(by.css('.ticketCard')).getText();
  }

  getTicketNumber() {
    return element(by.css('.ticketNumber')).getText();
  }

  getLeftContainer() {
    return element(by.id('leftContainer')).getText();
  }

  getRightContainer() {
    return element(by.id('rightContainer')).getText();
  }

  getTodayWidget() {
    return element(by.tagName('app-today')).getText();
  }

  getWeatherWidget() {
    return element(by.tagName('app-weather-view')).getText();
  }

  getCalendarWidget() {
    return element(by.tagName('app-calendar-view')).getText();
  }

  getNewsWidget() {
    return element(by.tagName('app-news-view')).getText();
  }

  getMailWidget() {
    return element(by.tagName('app-mail-view')).getText();
  }

  getNoteWidget() {
    return element(by.tagName('app-note-view')).getText();
  }

  getNewsEntries() {
    return element.all(by.css('app-news-view .news .newsEntry'));
  }

}
