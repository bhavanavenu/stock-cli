function dailyValue(data) {
  let dailyArray = [];
  for (let i in data) {
    dailyArray.push(
      data[i][0] +
        ":" +
        " closed at " +
        data[i][4] +
        " [ Low value at " +
        data[i][3] +
        ", High value at " +
        data[i][2] +
        " ]"
    );
  }
  return dailyArray;
}

module.exports = dailyValue;
