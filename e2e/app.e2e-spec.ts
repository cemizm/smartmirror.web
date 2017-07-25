import { SmartMirrorPage } from './app.po';
import {MirrorClient} from "./utils/mirror.client";

describe('smart-mirror App', () => {
  let page: SmartMirrorPage;
  let mirrorclient: MirrorClient;

  beforeEach(() => {
    page = new SmartMirrorPage();
    mirrorclient = new MirrorClient();
  });

  it('should provide the browser title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('SmartMirror');
  });

  it('should display ticket card', () => {
    page.navigateTo();
    expect(page.getTicketCard()).toBeTruthy();
  });

  it('should display ticket number', () => {
    page.navigateTo();
    expect(page.getTicketNumber()).toMatch(/\w{5}/);
  });
  
  it('should login into backend', () => {
    page.navigateTo();
    mirrorclient.login("test@test.de", "098f6bcd4621d373cade4e832627b4f6").subscribe( (res) => {
      expect(res.user).toEqual("test@test.de");
    });
  });


});
