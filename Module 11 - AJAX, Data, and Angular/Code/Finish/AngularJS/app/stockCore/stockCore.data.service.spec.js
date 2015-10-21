describe("stockCore.data.service", function() {

    // ** Arrange **
    beforeEach(angular.mock.module("app"));

    var stockQuotes;
    beforeEach(inject(function($httpBackend, quoteService, yahooFinanceWebServiceURL, fakeStockQuotes) {
      // Fake Products Data
      $httpBackend.whenJSONP(function(url) {
        return url.indexOf(yahooFinanceWebServiceURL.url) === 0;
      }).respond(fakeStockQuotes);

      // ** Act **
      quoteService.getQuotes()
        .success(function (data) {
          stockQuotes = data;
        });

      // Then we flush the httpBackend to resolve the fake http call
      $httpBackend.flush();
    }));

    // ** Assert **
    it("should have 4 stock quotes'", function () {
        expect(stockQuotes.query.results.quote.length).toBe(4);
    });
});
