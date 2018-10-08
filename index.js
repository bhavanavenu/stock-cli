var program = require("commander");
const axios = require("axios");
require("dotenv").config();
var Quandl = require("quandl");

program
  .version("0.1.0")
  .option("-s, --stock <s>", "A stock name argument", String)
  .option("-t, --token <t>", "Quandl API token", String)
  .option("-S, --start <S>", "start date", String)
  .option("-e, --end <e>", "end date", String)
  .parse(process.argv);

console.log(" stock is %j ", program.stock);
console.log(" token is %j ", program.token);
console.log(" start is %j ", program.start);
console.log(" end is %j ", program.end);

// axios
//   .get(
//     "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2018-05-26&end_date=2018-05-27&api_key=xxxx"
//   )
//   .then(result => {
//     return res.data;
//       })
//       .catch(errHandler);

//   });

// axios
//   .get(
//     `https://www.quandl.com/api/v3/datasets/WIKI/fb.json?column_index=4&start_date=2018-03-22&end_date=2018-03-27&api_key=xxxx`
//   )
//   .then(response => {
//     const stockData = response.data.dataset;

//     console.log(stockData);
//   });

var quandl = new Quandl({
  auth_token: program.token,
  api_version: 3
});

quandl.dataset(
  {
    source: "WIKI",
    table: program.stock
  },
  {
    order: "asc",
    exclude_column_names: true,
    // Notice the YYYY-MM-DD format
    start_date: program.start,
    end_date: program.end,
    column_index: 4
  },
  function(err, response) {
    if (err) throw err;

    console.log(response);
  }
);
