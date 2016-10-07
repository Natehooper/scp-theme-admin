(function () {
  'use strict';

  angular
    .module('app.hardware.switch.speed')
    .config(routeConfig)
    ;

  /**
   * @ngInject
   */
  function routeConfig($stateProvider, RouteHelpersProvider) {
    var helper = RouteHelpersProvider;
    $stateProvider
      .state('app.hardware.switch.speed', {
        url: '/speed',
        abstract: true,
        template: helper.dummyTemplate,
        resolve: helper.resolveFor('lang:speed'),
      })
      .state('app.hardware.switch.speed.view', {
        url: '/:id',
        abstract: true,
        template: helper.dummyTemplate,
      })
      .state('app.hardware.switch.speed.view.edit', {
        url: '',
        title: 'View Switch Speed',
        controller: 'SpeedViewCtrl as vm',
        templateUrl: helper.basepath('hardware/switch/speed/speed.view.html'),
      })
      ;

    helper.url.map('port-speed/?([0-9]*)', function ($state, id) {
      return 'hardware/switch/speed'+(id && '/'+id);
    });
  }
})();
