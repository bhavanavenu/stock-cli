function rateOfReturn(data) {
  let startPrice = data[0][4];
  //console.log("start date close price: ", startPrice);

  let endPrice = data[data.length - 1][4];
  //console.log("End date close price: ", endPrice);
  let startDate = data[0][0];
  let endDate = data[data.length - 1][0];
  let ror = endPrice - startPrice;
  let percentRor = Math.round((ror / data[data.length - 1][4]) * 100 * 10) / 10;

  console.log(
    "Return : " +
      ror +
      " " +
      "(" +
      percentRor +
      " %)" +
      " " +
      "Start Price of " +
      "[" +
      startPrice +
      "]" +
      " on " +
      startDate +
      "---->" +
      "End Price of " +
      "[" +
      endPrice +
      "]" +
      " on " +
      endDate
  );
  return;
}

module.exports = rateOfReturn;
