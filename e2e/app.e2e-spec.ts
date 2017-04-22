import { WakatakasailingPage } from './app.po';

describe('wakatakasailing App', function() {
  let page: WakatakasailingPage;

  beforeEach(() => {
    page = new WakatakasailingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
