(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('OrdersOverviewController', OrdersOverviewController);

    /** @ngInject */
    function OrdersOverviewController($stateParams, ordersService) {
        var vm = this;
        
        vm.patientOrders = ordersService.getOrders($stateParams.patientId);
        
        vm.editOrder = function (order) {
            alert(order);
        }
        
         vm.editOrder2 = function (order) {
            alert("lalelu");
            order.stopPropagation();
        }              
    }
})();