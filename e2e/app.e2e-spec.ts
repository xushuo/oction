import { OctionPage } from './app.po';

describe('oction App', () => {
  let page: OctionPage;

  beforeEach(() => {
    page = new OctionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
