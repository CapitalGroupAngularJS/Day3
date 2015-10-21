(function() {
  'use strict';

  beforeEach(angular.mock.module("app", function($provide) {

    // YQL Console - https://developer.yahoo.com/yql/console
    // select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")
    $provide.constant("fakeStockQuotes",

    {
       "query": {
        "count": 4,
        "created": "2015-10-19T12:23:11Z",
        "lang": "en-US",
        "diagnostics": {
         "url": [
          {
           "execution-start-time": "0",
           "execution-stop-time": "118",
           "execution-time": "118",
           "content": "http://www.datatables.org/yahoo/finance/quote/yahoo.finance.quote.xml"
          },
          {
           "execution-start-time": "123",
           "execution-stop-time": "137",
           "execution-time": "14",
           "content": "http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,AAPL,GOOG,MSFT"
          }
         ],
         "publiclyCallable": "true",
         "cache": {
          "execution-start-time": "121",
          "execution-stop-time": "122",
          "execution-time": "1",
          "method": "GET",
          "type": "MEMCACHED",
          "content": "5d1e1de680846a307c9874dc3d6878dc"
         },
         "query": {
          "execution-start-time": "122",
          "execution-stop-time": "138",
          "execution-time": "16",
          "params": "{url=[http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,AAPL,GOOG,MSFT]}",
          "content": "select * from csv where url=@url and columns='Ask,AverageDailyVolume,Bid,AskRealtime,BidRealtime,BookValue,Change&PercentChange,Change,Commission,Currency,ChangeRealtime,AfterHoursChangeRealtime,DividendShare,LastTradeDate,TradeDate,EarningsShare,ErrorIndicationreturnedforsymbolchangedinvalid,EPSEstimateCurrentYear,EPSEstimateNextYear,EPSEstimateNextQuarter,DaysLow,DaysHigh,YearLow,YearHigh,HoldingsGainPercent,AnnualizedGain,HoldingsGain,HoldingsGainPercentRealtime,HoldingsGainRealtime,MoreInfo,OrderBookRealtime,MarketCapitalization,MarketCapRealtime,EBITDA,ChangeFromYearLow,PercentChangeFromYearLow,LastTradeRealtimeWithTime,ChangePercentRealtime,ChangeFromYearHigh,PercebtChangeFromYearHigh,LastTradeWithTime,LastTradePriceOnly,HighLimit,LowLimit,DaysRange,DaysRangeRealtime,FiftydayMovingAverage,TwoHundreddayMovingAverage,ChangeFromTwoHundreddayMovingAverage,PercentChangeFromTwoHundreddayMovingAverage,ChangeFromFiftydayMovingAverage,PercentChangeFromFiftydayMovingAverage,Name,Notes,Open,PreviousClose,PricePaid,ChangeinPercent,PriceSales,PriceBook,ExDividendDate,PERatio,DividendPayDate,PERatioRealtime,PEGRatio,PriceEPSEstimateCurrentYear,PriceEPSEstimateNextYear,Symbol,SharesOwned,ShortRatio,LastTradeTime,TickerTrend,OneyrTargetPrice,Volume,HoldingsValue,HoldingsValueRealtime,YearRange,DaysValueChange,DaysValueChangeRealtime,StockExchange,DividendYield'"
         },
         "javascript": {
          "execution-start-time": "120",
          "execution-stop-time": "165",
          "execution-time": "44",
          "instructions-used": "193584",
          "table-name": "yahoo.finance.quote"
         },
         "user-time": "165",
         "service-time": "133",
         "build-version": "0.2.240"
        },
        "results": {
         "quote": [
          {
           "symbol": "YHOO",
           "AverageDailyVolume": "16838800",
           "Change": "-0.11",
           "DaysLow": "33.16",
           "DaysHigh": "33.86",
           "YearLow": "27.20",
           "YearHigh": "52.62",
           "MarketCapitalization": "31.41B",
           "LastTradePriceOnly": "33.37",
           "DaysRange": "33.16 - 33.86",
           "Name": "Yahoo! Inc.",
           "Symbol": "YHOO",
           "Volume": "12499587",
           "StockExchange": "NMS"
          },
          {
           "symbol": "AAPL",
           "AverageDailyVolume": "60956400",
           "Change": "-0.82",
           "DaysLow": "110.53",
           "DaysHigh": "112.00",
           "YearLow": "92.00",
           "YearHigh": "134.54",
           "MarketCapitalization": "633.23B",
           "LastTradePriceOnly": "111.04",
           "DaysRange": "110.53 - 112.00",
           "Name": "Apple Inc.",
           "Symbol": "AAPL",
           "Volume": "39288018",
           "StockExchange": "NMS"
          },
          {
           "symbol": "GOOG",
           "AverageDailyVolume": "2542470",
           "Change": "+0.46",
           "DaysLow": "657.20",
           "DaysHigh": "664.97",
           "YearLow": "486.23",
           "YearHigh": "678.64",
           "MarketCapitalization": "453.96B",
           "LastTradePriceOnly": "662.20",
           "DaysRange": "657.20 - 664.97",
           "Name": "Google Inc.",
           "Symbol": "GOOG",
           "Volume": "1611199",
           "StockExchange": "NMS"
          },
          {
           "symbol": "MSFT",
           "AverageDailyVolume": "33900100",
           "Change": "+0.50",
           "DaysLow": "46.90",
           "DaysHigh": "47.54",
           "YearLow": "39.72",
           "YearHigh": "50.05",
           "MarketCapitalization": "379.98B",
           "LastTradePriceOnly": "47.51",
           "DaysRange": "46.90 - 47.54",
           "Name": "Microsoft Corporation",
           "Symbol": "MSFT",
           "Volume": "26483468",
           "StockExchange": "NMS"
          }
         ]
        }
       }
     });
  }));
})();
