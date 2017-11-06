import { AngularHomePage } from './app.po';

describe('angular-home App', function() {
  let page: AngularHomePage;

  beforeEach(() => {
    page = new AngularHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
