import { AbstractPage } from './AbstractPage';
import { getPriceValueAsString } from '../utils/priceUtils';

export class ConfigurePage extends AbstractPage {
  private ipAddressLocator = this.page.getByRole('textbox', { name: 'IP Address *' });
  private continueButtonLocator = this.page.locator('#btnCompleteProductConfig');

  private getAddonPanelLocator = (addonTitle: string) =>
    this.page.getByText(addonTitle).locator(`//ancestor::div[contains(@class,'panel-addon')]`);

  private getAddonPriceLocator = (addonTitle: string) =>
    this.getAddonPanelLocator(addonTitle).locator(`.panel-price`);

  public getItemInOrderSummaryLocator = (itemTitle: string, itemPrice: string) =>
    this.page
      .locator('.float-left')
      .getByText(itemTitle)
      .locator(`//following-sibling::span`)
      .getByText(itemPrice);

  async enterIpAddress(ipAddress: string) {
    await this.page.waitForLoadState('load');
    await this.ipAddressLocator.pressSequentially(ipAddress);
    await this.ipAddressLocator.press('Enter');
  }

  async selectAddonByTitle(addonTitle: string) {
    await this.getAddonPanelLocator(addonTitle).click();
  }

  async getAddonPriceByTitle(addonTitle: string) {
    return getPriceValueAsString(await this.getAddonPriceLocator(addonTitle).textContent());
  }

  async clickContinue() {
    await this.continueButtonLocator.click();
  }
}
