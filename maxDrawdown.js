function maxDrawdown(data) {
  let max = [];
  let dayOfDate = 0;
  for (let i = 0; i < data.length; i++) {
    let date = data[i][0];
    let high = data[i][2];
    let low = data[i][3];
    let drawdown = Math.round(((high - low) / high) * 100 * 10) / 10;
    max.push([drawdown, date, high, low]);
  }

  function maxVal(array) {
    let m = array[0][0];

    for (let i = 1; i < array.length; i++) {
      if (array[i][0] > m) {
        m = array[i][0];
        dayOfDate = i;
      }
    }
    return m;
  }

  console.log(
    "MAXIMUM DRAWDOWN IS : " +
      maxVal(max) +
      "%" +
      " [ " +
      " High value of " +
      max[dayOfDate][2] +
      " on " +
      max[dayOfDate][1] +
      "," +
      " Low value of " +
      max[dayOfDate][3] +
      " on " +
      max[dayOfDate][1] +
      " ] "
  );
}

module.exports = maxDrawdown;
