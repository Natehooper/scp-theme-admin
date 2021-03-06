(function () {
  'use strict';

  angular
    .module('app.pxe')
    .controller('PxeDhcpViewCtrl', PxeDhcpViewCtrl)
    ;

  /**
   * View Profile Controller
   *
   * @ngInject
   */
  function PxeDhcpViewCtrl(Edit, $stateParams) {
    var vm = this;

    vm.edit = Edit('pxe/dhcp/'+$stateParams.id);
    vm.edit.input = {};
    vm.edit.submit = submit;
    vm.logs = {
      filter: {
        target_type: 'pxe.dhcp',
        target_id: $stateParams.id,
      },
    };

    activate();

    //////////

    function activate() {
      vm.edit.getCurrent();
    }

    function submit() {
      vm.edit.patch(vm.edit.getData());
    }
  }
})();
