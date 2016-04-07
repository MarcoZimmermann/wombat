(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController() {
    var vm = this;
    
    vm.test = 0;
  }
})();
