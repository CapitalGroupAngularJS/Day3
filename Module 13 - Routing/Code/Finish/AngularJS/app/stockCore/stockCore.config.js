(function() {
  'use strict';

  angular
    .module('app.stockCore')
    .config(function($routeProvider, $locationProvider) {

      $routeProvider.
        when('/Quotes', {
          templateUrl: "app/stockList/stockList.html",
          controller: "StockList",
          controllerAs: "vm"
      }).
        when("/Quote", {
          templateUrl: "app/stockDetails/stockDetails.html",
          controller: "StockDetails",
          controllerAs: "vm"
        }).
        otherwise({
          redirectTo: '/Quotes'
        });

        //$locationProvider.html5Mode(true);
      });
})();
