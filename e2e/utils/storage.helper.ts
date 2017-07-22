import {browser} from "protractor";

export class StorageHelper {

  clearStorage() {
    browser.executeScript("return window.localStorage.clear;");
  }

  setItem(key: string, value: string) {
    browser.executeScript("return window.localStorage.setItem(key, value);");
  }
}
