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

  function maxVal(array) {
    let m = array[0][0];

    for (let i in array) {
      if (array[i][0] > m) {
        m = array[i][0];
        day = i;
      }
    }
    return m;
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
