// the stock generated since the start date to any date
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
