import { MultiselectDropdownPage } from './app.po';

describe('multiselect-dropdown App', function() {
  let page: MultiselectDropdownPage;

  beforeEach(() => {
    page = new MultiselectDropdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
