var program = require("commander");
const axios = require("axios");
require("dotenv").config();
const rateOfReturn = require("./rateOfReturn");

program
  .version("0.1.0")
  .option("-s, --stock <s>", "A stock name argument", String)
  .option("-t, --token <t>", "Quandl API token", String)
  .option("-S, --start <S>", "start date", String)
  .option("-e, --end <e>", "end date", String)
  .parse(process.argv);

var stockName = program.stock;
var startDate = program.start;
var endDate = program.end;
var api_key = program.token;

axios
  .get(
    `https://www.quandl.com/api/v3/datasets/WIKI/${stockName}.json?order=asc&start_date=${startDate}&end_date=${endDate}&api_key=${api_key}`
  )
  .then(response => {
    const stockData = response.data.dataset.data;

    dailyValue(stockData);
    rateOfReturn(stockData);
    //console.log(response.data.dataset.data);
  });

function dailyValue(data) {
  for (i = 0; i < data.length; i++) {
    console.log(
      data[i][0] +
        ":" +
        " closed Price " +
        data[i][4] +
        " [Low value at " +
        data[i][3] +
        ", High value at " +
        data[i][2] +
        "]"
    );
  }
}
