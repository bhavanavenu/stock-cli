#!/usr/bin/env node

const axios = require("axios");
const rateOfReturn = require("./rateOfReturn");
const maxDrawdown = require("./maxDrawdown");
const dailyValue = require("./dailyStockValue");
const sendmail = require("sendmail")({ silent: true });

const args = require("minimist")(process.argv.slice(2));

if (args.h === true || args.help === true || args._ == "") {
  helpText();
}

//cli help-text

function helpText() {
  console.log("\n");
  console.log(" Welcome to Stock CLI");
  console.log("\n");
  console.log(" Usage :");
  console.log(" -h or --help for this help menu");
  console.log("\n");
  console.log(" Format of usage of this cli");
  console.log(
    " stock-cli <quandl-api-token> <stockname(APPL)> <startdate(yyyy-mm-dd)> <enddate(yyyy-mm-dd)>"
  );
  console.log("\n");

  console.log(" Example : ");
  console.log(" stock-cli xxxx APPL 2018-03-22 2018-03-27");
  console.log("\n");
  console.log(" To send email of the result :");
  console.log(
    " stock-cli xxxx APPL 2018-03-22 2018-03-27 sendToEmail@domain.com yourEmail@domain.com"
  );

  console.log("\n");
}

var apiKey = args._[0];
var stockName = args._[1];
var startDate = args._[2];
var endDate = args._[3];
var toEmail = args._[4];
var fromEmail = args._[5];
var stockData = null;
var outputData = "<h1> Stock : " + stockName + "</h1>";

// http GET stock data from quandl api

if (args._ != "") {
  axios
    .get(
      `https://www.quandl.com/api/v3/datasets/WIKI/${stockName}.json?order=asc&start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
    )
    .then(response => {
      stockData = response.data.dataset.data;
      output(stockData);
      if (toEmail) {
        emailContent();
      }
    });
}

// cli OUTPUT ----takes in stripped out data from quandl api

function output(stockData) {
  array = dailyValue(stockData);

  console.log("\n");
  for (let i in array) {
    console.log(array[i]);
    outputData += "<p>" + array[i].toString() + "</p>";
  }

  console.log("\n");
  console.log(maxDrawdown(stockData));
  outputData += "<br>" + "<p>" + "<b>" + maxDrawdown(stockData) + "</p>";
  console.log("\n");
  console.log(rateOfReturn(stockData));
  outputData += "<br>" + "<p>" + rateOfReturn(stockData) + "</p>" + "</b>";
  console.log("\n");
}

// send email the stock data via cli

function emailContent() {
  sendmail(
    {
      from: fromEmail,
      to: toEmail,
      subject: "STOCK DATA : " + stockName,
      html: outputData
    },
    function(err, reply) {
      if (reply) {
        console.log("Email sent to :", toEmail);
      }
    }
  );
}
