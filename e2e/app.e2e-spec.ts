import { SmartMirrorPage } from './app.po';
import {MirrorClient} from "./utils/mirror.client";
import {browser} from "protractor";
import {StorageHelper} from "./utils/storage.helper";

describe('smart-mirror App', () => {
  let page: SmartMirrorPage;
  let mirrorclient: MirrorClient;
  let storageHelper: StorageHelper;
  let ticketNr: string;
  let accessToken: string;
  const user = "test@test.de";
  const password = "098f6bcd4621d373cade4e832627b4f6";

  beforeEach(() => {
    page = new SmartMirrorPage();
    mirrorclient = new MirrorClient();
    storageHelper = new StorageHelper();
  });

  afterEach( () => {
    browser.manage().logs().get('browser').then(function(browserLog) {
      console.log('log: ' + require('util').inspect(browserLog));
    });
  });

  function log(arg) {
    browser.call(function() {
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

  it('should display ticket number', async () => {
    ticketNr = await page.getTicketNumber();
    expect(page.getTicketNumber()).toMatch(/\w{5}/);
  });

  it('should login into backend', () => {
    mirrorclient.login(user, password).subscribe( async(res) => {
      accessToken = await res.accessToken;
      expect(res.accessToken).not.toContain("");
    });
  });

  it('should register mirror in backend', () => {
    mirrorclient.registerMirror(ticketNr, accessToken).subscribe(res => {
      log(res);
      expect(res.id).toBeDefined();
    });
  });

  it('should show widgets', () => {
      browser.pause();
      expect(page.getTodayWidget()).toBeDefined();
  });

});
