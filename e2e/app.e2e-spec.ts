import {SmartMirrorPage} from "./app.po";
import {MirrorClient} from "./utils/mirror.client";
import {browser, protractor} from "protractor";
import {StorageHelper} from "./utils/storage.helper";

describe('smart-mirror App', () => {
  var EC = protractor.ExpectedConditions;
  let client = new MirrorClient();

  let page: SmartMirrorPage;
  let storageHelper: StorageHelper;

  let ticketNr: string;
  const user = "test@test.de";
  const password = "098f6bcd4621d373cade4e832627b4f6";

  beforeEach(() => {
    page = new SmartMirrorPage();
    storageHelper = new StorageHelper();
  });

  afterEach(() => {
    browser.manage().logs().get('browser').then(function (browserLog) {
      console.log('log: ' + require('util').inspect(browserLog));
    });
  });

  function log(arg) {
    browser.call(function () {
      console.log(arg);
    });
  }

  it('should provide the browser title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('SmartMirror');
  });

  it('should display ticket card', () => {
    expect(page.getTicketCard()).toBeTruthy();
  });

  it('should display ticket number', async() => {
    ticketNr = await page.getTicketNumber();
    expect(ticketNr).toMatch(/\w{5}/);
  });

  it('should login into backend', async() => {
    var loginRes = await client.login(user, password);
    expect(loginRes.statusCode).toBe(200);
    expect(loginRes.result.accessToken).not.toBeNull();
  });

  it('should register mirror in backend', async() => {
    var regRes = await client.registerMirror(ticketNr);
    expect(regRes.statusCode).toBe(200, "Registering mirror failed");
  });

  it('should show widgets', async() => {
    browser.wait(EC.presenceOf(page.getTodayWidget()), 25000);
  });

});
