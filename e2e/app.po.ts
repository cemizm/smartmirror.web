import {browser, by, element} from 'protractor';

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
    return element(by.css('app-home > div > div:first-child')).getText();
  }

  getRightContainer() {
    return element(by.css('app-home > div > div:last-child')).getText();
  }

  getTodayWidget() {
    return element(by.css('app-today')).getText();
  }
}
