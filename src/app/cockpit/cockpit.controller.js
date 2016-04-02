(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('CockpitController', CockpitController);

  /** @ngInject */
  function CockpitController() {
    var vm = this;
    
    vm.test = 0;
  }
})();
