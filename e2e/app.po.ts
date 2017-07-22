import {browser, by, element} from 'protractor';

export class SmartMirrorPage {
  navigateTo() {
    return browser.get('/');
  }

  getLeftContainer() {
    return element(by.css('app-home > div > div:first-child')).getText();
  }

  getRightContainer() {
    return element(by.css('app-home > div > div:last-child')).getText();
  }
}
