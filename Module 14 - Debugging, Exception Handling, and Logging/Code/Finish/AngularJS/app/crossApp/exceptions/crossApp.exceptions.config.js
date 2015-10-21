(function () {
    angular.module('crossApp.exceptions')
    .config(function($provide)
      {
            // Use the `decorator` solution to substitute or attach behaviors to
            // original service instance; @see angular-mocks for more examples....

            $provide.decorator('$exceptionHandler', function($delegate, logger)
            {
              return function(exception, cause) {
                var errorData = {exception: exception, cause: cause};
                exception.message = "StockApp: " + exception.message;
                $delegate(exception, cause);
                logger.error(exception.message, errorData);
              };
            });
      })
})();
