import { Page } from '@playwright/test';

export abstract class AbstractPage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async goto(url: string = '/') {
    await this.page.goto(url);
  }
}
