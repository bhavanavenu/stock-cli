# stock-cli

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Features

- To get Stock prices on the given date / during the time frame
- Return the stock has generated
- Obtain Maximum drawdown
- send the result to an email address

### Prerequisites

Quandl API key. Get one from [here](https://www.quandl.com/data/WIKI​)

### Installing

`npm install`

### And coding style tests

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cf35d7cb6c834df1b7ea8f108cadc0a2)](https://app.codacy.com/app/bhavanavenu/stock-cli?utm_source=github.com&utm_medium=referral&utm_content=bhavanavenu/stock-cli&utm_campaign=Badge_Grade_Dashboard)

## Built With

- [axios](https://www.npmjs.com/package/axios)
- [sendmail](https://www.npmjs.com/package/sendmail)
- [minimist](https://www.npmjs.com/package/minimist)
- [quandl](ttps://www.quandl.com/data/WIKI​)

## Authors

- **Bhavana Venu**

## Usage

```
Welcome to Stock CLI


 Usage :
 -h or --help for this help menu


 Format of usage of this cli
 node stock-cli.js <quandl-api-token> <stockname(APPL)> <startdate(yyyy-mm-dd)> <enddate(yyyy-mm-dd)>


 Example :
 node stock-cli.js xxxx APPL 2018-03-22 2018-03-27


 To send email of the result :
 node stock-cli.js xxxx APPL 2018-03-22 2018-03-27 sendToEmail@domain.com yourEmail@domain.com
```

## Sample Output

```
2018-03-22: closed at 168.845 [ Low value at 168.6, High value at 172.68 ]
2018-03-23: closed at 164.94 [ Low value at 164.94, High value at 169.92 ]
2018-03-26: closed at 172.77 [ Low value at 166.44, High value at 173.1 ]
2018-03-27: closed at 168.34 [ Low value at 166.92, High value at 175.15 ]


Maximum Drawdown : 4.7% [  High value of 175.15 on 2018-03-27, Low value of 166.92 on 2018-03-27 ]


Return : -0.5049999999999955 (-0.3 %) [ Start value of 168.845 on 2018-03-22-->End value of 168.34 on 2018-03-27 ]
```
