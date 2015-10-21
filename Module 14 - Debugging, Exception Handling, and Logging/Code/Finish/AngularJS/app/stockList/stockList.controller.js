(function() {
  'use strict';

  angular.module('app.stockList')
    .controller("StockList", StockList);

  function StockList(quoteService, logger) {
    var vm = this;
    vm.message = "StockList Controller";
    //vm.stockQuotes = stockQuotes;
    quoteService.getQuotes()
            .success(function (data) {
              vm.stockQuotes = data;
              logger.info("stockQuotes Loaded", data);

              // Test $exceptionHandler decorator
              //throw new TypeError('Boommmm.....');
            })
            .error(function () {
              logger.error("Failed to Load Data", "");
            });
  }
})();
