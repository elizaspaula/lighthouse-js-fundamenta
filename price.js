var prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

// your code goes here

function changePrice(prices) {
  for (var index = 0; index < prices.length; index++) {
    if (index === 0) {
      prices[index] = 11;
    } else if (index == 2) {
      prices[index] = 33;
    } else if (index == 6) {
      prices[index] = 77;
    }
  }
  return prices;
}
console.log(changePrice(prices));
