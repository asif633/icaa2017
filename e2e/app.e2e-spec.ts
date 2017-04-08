import { AmuMathIcom2017Page } from './app.po';

describe('amu-math-icom2017 App', () => {
  let page: AmuMathIcom2017Page;

  beforeEach(() => {
    page = new AmuMathIcom2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
