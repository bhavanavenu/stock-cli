const axios = require("axios");
const rateOfReturn = require("./rateOfReturn");
const maxDrawdown = require("./maxDrawdown");
const dailyValue = require("./dailyStockValue");

const args = require("minimist")(process.argv.slice(2));

if (args.h == true || args.help == true || args._ == "") {
  helpText();
}

function helpText() {
  console.log("\n");
  console.log(
    " ######################################### Welcome to Stock CLI ############################################"
  );
  console.log("\n");
  console.log(" Usage :");
  console.log(" -h or --help for this help menu");
  console.log(
    "node stock-cli <quandl-api-token> <stockname(APPL)> <startdate(yyyy-mm-dd)> <enddate(yyyy-mm-dd)>"
  );
  console.log("\n");

  console.log(" Example : ");
  console.log("node stock-cli xxxx APPL 2018-03-22 2018-03-27");

  console.log("\n");
}

var apiKey = args._[0];
var stockName = args._[1];
var startDate = args._[2];
var endDate = args._[3];

if (args._ != "") {
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
}
