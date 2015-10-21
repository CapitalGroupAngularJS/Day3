(function() {
  'use strict';

  angular.module('app.stockList')
    .controller("StockList", StockList);

  function StockList(stockQuotes) {
    var vm = this;
    vm.message = "StockList Controller";
    vm.stockQuotes = stockQuotes;
  }
})();
