import { SmartMirrorPage } from './app.po';

describe('smart-mirror App', () => {
  let page: SmartMirrorPage;

  beforeEach(() => {
    page = new SmartMirrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
  it('shoulld display right container', ()=>{
    page.navigateTo();
    expect(page.getRightContainer()).toEqual('');
  });
});
