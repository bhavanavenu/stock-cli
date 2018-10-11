//calculate rate of return using the formula from https://en.wikipedia.org/wiki/Rate_of_return#Return
//takes in sample data like shown below
// data = [
//   [
//     "2018-03-22",
//     170,
//     172.68,
//     168.6,
//     168.845,
//     41051076,
//     0,
//     1,
//     170,
//     172.68,
//     168.6,
//     168.845,
//     41051076
//   ],
//   [
//     "2018-03-23",
//     168.39,
//     169.92,
//     164.94,
//     164.94,
//     40248954,
//     0,
//     1,
//     168.39,
//     169.92,
//     164.94,
//     164.94,
//     40248954
//   ]
// ];
function rateOfReturn(data) {
  let startPrice = data[0][4];
  let endPrice = data[data.length - 1][4];
  let startDate = data[0][0];
  let endDate = data[data.length - 1][0];
  let ror = endPrice - startPrice;

  //calculate percentage rate of return
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
