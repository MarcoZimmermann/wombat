(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController() {
    var vm = this;

    vm.products = [];
   // tempInit(vm);

  } // Controller

})();
