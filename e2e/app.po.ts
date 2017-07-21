import { browser, element, by } from 'protractor';

export class SmartMirrorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getLeftContainer() {
    return  element(by.css('app-home > div > div:first-child')).getText();
  }
  getRightContainer() {
    return element(by.css('app-home > div > div:last-child')).getText();
  }
}
