(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('EditOrderController', EditOrderController);

    /** @ngInject */
    function EditOrderController($stateParams, $mdDialog, ordersService) {
        var vm = this;
        
        var order = ordersService.getOrder(123);

        vm.cancel = function() {
            $mdDialog.cancel();
        }

        vm.save = function() {
            $mdDialog.hide('Lalelu');
        }        
    }
})();