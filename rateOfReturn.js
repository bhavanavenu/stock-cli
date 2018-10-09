function rateOfReturn(data) {
  let startPrice = data[0][4];
  console.log("start date close price: ", startPrice);

  let endPrice = data[data.length - 1][4];
  console.log("End date close price: ", endPrice);

  let ror = endPrice - startPrice;
  let percentRor = Math.round((ror / data[data.length - 1][4]) * 100 * 10) / 10;

  return percentRor;
}

module.exports = rateOfReturn;
