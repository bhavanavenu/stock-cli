function dailyValue(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(
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
}

module.exports = dailyValue;
