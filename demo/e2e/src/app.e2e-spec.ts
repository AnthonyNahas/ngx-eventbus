import { NgxEventbusDemoPage } from './app.po';

describe('ngx-eventbus-demo App', () => {
  let page: NgxEventbusDemoPage;

  beforeEach(() => {
    page = new NgxEventbusDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
