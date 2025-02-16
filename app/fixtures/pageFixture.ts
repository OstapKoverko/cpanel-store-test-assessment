import { test as base } from '@playwright/test';
import { LicensesPage } from '../pages/LicensesPage';
import { ConfigurePage } from '../pages/ConfigurePage';
import { ReviewPage } from '../pages/ReviewPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type Pages = {
  licensesPage: LicensesPage;
  configurePage: ConfigurePage;
  reviewPage: ReviewPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<Pages>({
  licensesPage: async ({ page }, use) => {
    await use(new LicensesPage(page));
  },
  configurePage: async ({ page }, use) => {
    await use(new ConfigurePage(page));
  },
  reviewPage: async ({ page }, use) => {
    await use(new ReviewPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});
