(function () {
  'use strict';

  angular
    .module('app.network.switch.list')
    .factory('SwitchList', SwitchListFactory);

  /**
   * SwitchList Factory
   *
   * @ngInject
   */
  function SwitchListFactory (List, ListConfirm) {
    return function () {
        var list = List('switch');
        var confirm = ListConfirm(list, 'switch.modal.delete');

        list.bulk.add('Delete', confirm.delete);

        return list;
    };
  }
})();