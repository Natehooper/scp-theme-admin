(function () {
  'use strict';

  var INPUTS = {
    name: '',
    type: 0,
    ip: '',
    port: '',
    ssh_user: '',
    ssh_pass: '',
    ssh_en_pass: '',
    snmp_pass: '',
  };

  angular
    .module('app.hardware')
    .component('switchForm', {
      require: {
      },
      bindings: {
        form: '=',
      },
      controller: 'SwitchFormCtrl as switchForm',
      transclude: true,
      templateUrl: 'app/hardware/switch/switch.form.html'
    })
    .controller('SwitchFormCtrl', SwitchFormCtrl)
    ;

  /**
   * @ngInject
   */
  function SwitchFormCtrl(Select) {
    var switchForm = this;

    switchForm.switchTypes = ['Dell', 'Juniper'];
    switchForm.groups = Select('group').multi();

    switchForm.$onInit = init;

    //////////

    function init() {
      switchForm.form.getData = getData;
      switchForm.input = switchForm.form.input = switchForm.form.input || {};
      _.assign(switchForm.input, INPUTS);

      if (switchForm.form.on) {
        switchForm.form.on(['change', 'load'], function (response) {
          var items = switchForm.groups.selected;

          _.setContents(items, response.groups);
        });
      }
    }

    function getData() {
      var data = _.clone(switchForm.input);

      data.groups = _.map(switchForm.groups.selected, 'id');

      return data;
    }
  }
})();