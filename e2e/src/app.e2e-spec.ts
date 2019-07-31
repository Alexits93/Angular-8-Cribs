import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('checking default page structure', () => {
  const currentUrl: string = browser.baseUrl;

  it('should display welcome message', () => {
    AppPage.navigateTo(currentUrl);
    expect(AppPage.getTitleText()).toEqual('Angular 8 demo');
  });

  it('the crib adding form should be present', () => {
    AppPage.navigateTo(currentUrl);
    expect(element(by.css('app-add-listing-form')).isPresent).toBeTruthy();
  });

  it('the crib listing section should be present', () => {
    AppPage.navigateTo(currentUrl);
    expect(element(by.css('app-crib-listing')).isPresent).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
