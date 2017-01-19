(function () {
  'use strict';

  angular
    .module('app.pxe.driver.list')
    .component('pxeDriverTable', {
      require: {
        list: '\^list',
      },
      bindings: {
        showName: '=?',
        showReserved: '=?',
        showIpEntities: '=?',
        showServers: '=?',
        showActions: '=?',
      },
      controller: 'PxeDriverTableCtrl as table',
      transclude: true,
      templateUrl: 'app/pxe/driver/list/list.table.html'
    })
    .controller('PxeDriverTableCtrl', PxeDriverTableCtrl)
    ;

  /**
   * @ngInject
   */
  function PxeDriverTableCtrl() {
    var table = this;

    table.$onInit = init;

    ///////////

    function init() {
      _.defaults(table, {
        showName: true,
        showReserved: true,
        showIpEntities: true,
        showServers: true,
        showActions: true,
      });
    }
  }
})();
