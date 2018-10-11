# stock-cli

A simple CLI to get stock data from Quandl data source and also to share the data to anyone via email.

## Features

- To get stock prices on the given date / during the time frame
- Return the stock has generated
- Obtain Maximum drawdown
- send the result to an email address

### Prerequisites

- Quandl API key, get one from [here](https://www.quandl.com/data/WIKI​)

### Installing

`npm install`

to install as a command line package you will need to symlink `./stock-cli.js`

or you can just

`npm link`

## Built With

- [axios](https://www.npmjs.com/package/axios)
- [sendmail](https://www.npmjs.com/package/sendmail)
- [minimist](https://www.npmjs.com/package/minimist)
- [quandl](https://www.quandl.com/data/WIKI​)

## Authors

- **Bhavana Venu**

## Usage

You can run the command `stock-cli' from anywhere on your system.

`stock-cli xxxapi-keyxxx AAPL 2018-03-22 2018-03-27`

```
Welcome to Stock CLI


 Usage :
 -h or --help for this help menu


 Format of usage of this cli
 stock-cli <quandl-api-token> <stockname(APPL)> <startdate(yyyy-mm-dd)> <enddate(yyyy-mm-dd)>


 Example :
 stock-cli xxxx APPL 2018-03-22 2018-03-27


 To send email of the result :
 stock-cli xxxx APPL 2018-03-22 2018-03-27 sendToEmail@domain.com yourEmail@domain.com
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
