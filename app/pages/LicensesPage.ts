import { AbstractPage } from './AbstractPage';
import { getPriceValueAsString } from '../utils/priceUtils';

export class LicensesPage extends AbstractPage {
  private getlicenseContainerLocator = (licenseTitle: string) =>
    this.page.getByText(licenseTitle).locator(`//ancestor::div[@class = 'product clearfix']`);

  private getOrderNowButtonLocator = (licenseTitle: string) =>
    this.getlicenseContainerLocator(licenseTitle).locator(`//a`);

  private getLicensePriceLocator = (licenseTitle: string) =>
    this.getlicenseContainerLocator(licenseTitle).locator(`.price`);

  async goto() {
    await super.goto('/store/cpanel-licenses');
  }

  async getProductPriceByTitle(licenseTitle: string) {
    return getPriceValueAsString(await this.getLicensePriceLocator(licenseTitle).textContent());
  }

  async orderProductByTitle(licenseTitle: string) {
    await this.getOrderNowButtonLocator(licenseTitle).click({ delay: 500 });
  }
}
