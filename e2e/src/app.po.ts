import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo(url: string) {
    return browser.get(url) as Promise<any>;
  }

  static getTitleText() {
    return element(by.className('navbar-brand')).getText() as Promise<string>;
  }
}
