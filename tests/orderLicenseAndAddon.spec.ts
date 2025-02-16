import { test } from '../app/fixtures/pageFixture';
import { expect } from '@playwright/test';
import { getProratedPrice } from '../app/utils/priceUtils';

const testData = {
  licenseTitle: 'cPanel Solo® Cloud (1 Account)',
  addonTitle: 'LiteSpeed 8GB',
  ipAddress: '192.168.0.1',
};

const categories = [
  'Personal Information',
  'Billing Address',
  'Account Security',
  'Terms & Conditions',
  'Payment Details',
];

test('Order license and addon to cart', async ({
  licensesPage,
  configurePage,
  reviewPage,
  checkoutPage,
}) => {
  await licensesPage.goto();

  const licensePrice = await licensesPage.getProductPriceByTitle(testData.licenseTitle);

  await licensesPage.orderProductByTitle(testData.licenseTitle);

  await configurePage.enterIpAddress(testData.ipAddress);
  await configurePage.selectAddonByTitle(testData.addonTitle);

  const addonPrice = await configurePage.getAddonPriceByTitle(testData.addonTitle);

  await expect(
    configurePage.getItemInOrderSummaryLocator(testData.licenseTitle, licensePrice),
  ).toBeVisible();
  await expect(
    configurePage.getItemInOrderSummaryLocator(testData.addonTitle, addonPrice),
  ).toBeVisible();

  await configurePage.clickContinue();

  // BUG! See bugReport.txt
  // expect(await checkoutPage.getItemMonthlyPriceByTitle(testData.licenseTitle)).toBe(licensePrice);
  expect(await reviewPage.getItemProratedPriceByTitle(testData.licenseTitle)).toBe(
    getProratedPrice(licensePrice),
  );
  expect(await reviewPage.getItemMonthlyPriceByTitle(testData.addonTitle)).toBe(addonPrice);
  expect(await reviewPage.getItemProratedPriceByTitle(testData.addonTitle)).toBe(
    getProratedPrice(addonPrice),
  );

  await reviewPage.clickCheckout();

  await expect(
    checkoutPage.getIpAddressLocator(testData.licenseTitle, testData.ipAddress),
  ).toBeVisible();

  // BUG! See bugReport.txt
  // await expect(
  //   checkoutPage.getItemMonthlyPriceLocator(testData.licenseTitle, licensePrice)
  // ).toBeVisible();
  await expect(
    checkoutPage.getItemProratedPriceLocator(testData.licenseTitle, getProratedPrice(licensePrice)),
  ).toBeVisible();

  for (const category of categories) {
    await expect(checkoutPage.getCategoryByHeadingLocator(category)).toBeVisible();
  }

  await expect(checkoutPage.orderCompleteButtonLocator).toBeDisabled();
});
