import { OsirisWebsitePage } from './app.po';

describe('osiris-website App', () => {
  let page: OsirisWebsitePage;

  beforeEach(() => {
    page = new OsirisWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
