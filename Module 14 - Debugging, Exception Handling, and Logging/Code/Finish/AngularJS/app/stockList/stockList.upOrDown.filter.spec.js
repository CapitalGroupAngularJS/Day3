describe("stockList.upOrDown.filter", function() {

    // ** Arrange **
    beforeEach(module("app"));

    var data, filter;
    beforeEach(inject(function($filter, stockQuotes) {
      filter = $filter("upOrDown");
      data = stockQuotes.query.results.quote;
    }));

    // ** Act & Assert **
    // Test that controller sets message property to "StockList Controller"
    it("returns correct count when given null", function () {
        expect(filter(data, null).length).toBe(4);
    });

    it("returns the correct count when sign is positive", function () {
        expect(filter(data, "+").length).toBe(2);
    });

    it("returns the correct count when sign is negative", function () {
        expect(filter(data, "-").length).toBe(2);
    });
});
