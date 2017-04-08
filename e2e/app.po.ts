import { browser, element, by } from 'protractor';

export class AmuMathIcom2017Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
