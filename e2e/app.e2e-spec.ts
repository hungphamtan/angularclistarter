import { AppPage } from './app.po';
import { TITLE } from '../src/app/app.component';
// const TITLE = 'app here';

describe('angularclistarter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(TITLE);
  });
});
