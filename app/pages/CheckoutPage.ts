import { AbstractPage } from './AbstractPage';

export class CheckoutPage extends AbstractPage {
  private getItemCellLocator = (itemTitle: string) =>
    this.page.getByRole('cell', { name: itemTitle });

  getIpAddressLocator = (itemTitle: string, ipAddress: string) =>
    this.getItemCellLocator(itemTitle).locator(`//following::td[contains(.,'${ipAddress}')][1]`);

  getItemMonthlyPriceLocator = (itemTitle: string, monthPrice: string) =>
    this.getItemCellLocator(itemTitle).locator(`//following::td[contains(.,'${monthPrice}')]`);

  getItemProratedPriceLocator = (itemTitle: string, proratedPrice: string) =>
    this.getItemCellLocator(itemTitle).locator(`//following::td[contains(.,'${proratedPrice}')]`);

  getCategoryByHeadingLocator = (heading: string) =>
    this.page.locator('.sub-heading').getByText(heading);

  orderCompleteButtonLocator = this.page.locator('#btnCompleteOrder');
}
