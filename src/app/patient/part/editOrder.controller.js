(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('EditOrderController', EditOrderController);

    /** @ngInject */
    function EditOrderController($stateParams, ordersService) {
        var vm = this;
        
        var order = ordersService.currentOrder;
        vm.order = order;

        vm.cancel = function () {
            vm.order = null;
            ordersService.currentOrder = null;
        }
    }
})();