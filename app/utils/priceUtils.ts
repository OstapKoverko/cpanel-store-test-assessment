export function getPriceValueAsString(price: string | null): string {
  if (!price) {
    throw new Error('Could not get price text');
  }

  const match = price.match(/\d+(?:\.\d+)?/);
  if (!match) {
    throw new Error(`Could not extract a number from: "${price}"`);
  }

  return match[0];
}

// Calculates the prorated price for the remaining days of the month.
export function getProratedPrice(monthPrice: string): string {
  const amount = parseFloat(monthPrice);
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const daysLeft = lastDay - now.getDate() + 1;

  return ((amount / lastDay) * daysLeft).toFixed(2);
}
