import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  static getTitleText() {
    return element(by.className('navbar-brand')).getText() as Promise<string>;
  }
}
