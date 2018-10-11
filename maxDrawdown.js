//maximum drawdown obtained of the stock within that time frame.
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

function maxDrawdown(data) {
  let max = [];
  let day = 0;
  for (let i = 0; i < data.length; i++) {
    let date = data[i][0];
    let high = data[i][2];
    let low = data[i][3];
    let drawdown = Math.round(((high - low) / high) * 100 * 10) / 10;
    max.push([drawdown, date, high, low]);
  }

  //calculating maximum drawdown from all drawdowns

  function maxVal(array) {
    let md = array[0][0];

    for (let i in array) {
      if (array[i][0] > md) {
        md = array[i][0];
        day = i;
      }
    }
    return md;
  }

  return (
    "Maximum Drawdown : " +
    maxVal(max) +
    "%" +
    " [ " +
    " High value of " +
    max[day][2] +
    " on " +
    max[day][1] +
    "," +
    " Low value of " +
    max[day][3] +
    " on " +
    max[day][1] +
    " ] "
  );
}

module.exports = maxDrawdown;
