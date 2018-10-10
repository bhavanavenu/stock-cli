var program = require("commander");
const axios = require("axios");
const rateOfReturn = require("./rateOfReturn");
const maxDrawdown = require("./maxDrawdown");
const dailyValue = require("./dailyStockValue");

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
var apiKey = program.token;

axios
  .get(
    `https://www.quandl.com/api/v3/datasets/WIKI/${stockName}.json?order=asc&start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
  )
  .then(response => {
    const stockData = response.data.dataset.data;

    console.log("\n");
    dailyValue(stockData);
    console.log("\n");
    maxDrawdown(stockData);
    console.log("\n");
    rateOfReturn(stockData);
    console.log("\n");
    //console.log(response.data.dataset.data);
  });
