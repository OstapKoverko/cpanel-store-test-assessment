import { getPriceValueAsString } from '../utils/priceUtils';
import { AbstractPage } from './AbstractPage';

export class ReviewPage extends AbstractPage {
  private getCheckoutLocator = this.page.locator('#checkout');

  private getItemContainerLocator = (itemTitle: string) =>
    this.page.getByText(itemTitle).locator(`//ancestor::div[@class='item']`);

  private getItemMonthlyPriceLocator = (itemTitle: string) =>
    this.getItemContainerLocator(itemTitle).locator('.cycle');

  private getItemProratedPriceLocator = (itemTitle: string) =>
    this.getItemContainerLocator(itemTitle).locator(`//div[contains(@class,'item-price')]/span[1]`);

  async getItemMonthlyPriceByTitle(itemTitle: string) {
    return getPriceValueAsString(await this.getItemMonthlyPriceLocator(itemTitle).textContent());
  }

  async getItemProratedPriceByTitle(itemTitle: string) {
    return getPriceValueAsString(await this.getItemProratedPriceLocator(itemTitle).textContent());
  }

  async clickCheckout() {
    await this.getCheckoutLocator.click();
  }
}
