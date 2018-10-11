function rateOfReturn(data) {
  let startPrice = data[0][4];
  let endPrice = data[data.length - 1][4];
  let startDate = data[0][0];
  let endDate = data[data.length - 1][0];
  let ror = endPrice - startPrice;
  let percentRor = Math.round((ror / data[data.length - 1][4]) * 100 * 10) / 10;

  return (
    "Return : " +
    ror +
    " " +
    "(" +
    percentRor +
    " %)" +
    " [ Start value of " +
    startPrice +
    " on " +
    startDate +
    "-->" +
    "End value of " +
    endPrice +
    " on " +
    endDate +
    " ] "
  );
}

module.exports = rateOfReturn;
