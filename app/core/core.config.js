(function () {
  'use strict';

  angular
    .module('app.core')
    .value("THEME_CUSTOM_HTML_LOCATION", "config/custom-admin-theme.html")
    .config(coreConfig);


  /**
   * @ngInject
   */
  function coreConfig($compileProvider, $animateProvider, $locationProvider) {
    // Disable debug info for performance boost.
    $compileProvider.debugInfoEnabled(false);

    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    $locationProvider.html5Mode(location.port < 8000);
  }

})();
