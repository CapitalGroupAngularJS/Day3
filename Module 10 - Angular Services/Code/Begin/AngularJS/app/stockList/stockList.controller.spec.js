describe("stockList.Controller", function() {

    // ** Arrange **
    beforeEach(module("app"));

    var vm;
    beforeEach(inject(function($controller) {
      // ** Act **
      // Create controller
      vm = $controller("StockList");
    }));

    // ** Assert **
    // Test that controller sets message property to "StockList Controller"
    it("should set message Property to 'StockList Controller'", function () {
        expect(vm.message).toEqual("StockList Controller");
    });

    it("should have 4 stock quotes'", function () {
        expect(vm.stockQuotes.query.results.quote.length).toBe(4);
    });
});
