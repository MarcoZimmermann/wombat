(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('OrdersOverviewController', OrdersOverviewController);

    /** @ngInject */
    function OrdersOverviewController($stateParams, $mdDialog, ordersService) {
        var vm = this;
        
        vm.patientOrders = ordersService.getOrders($stateParams.patientId);
        
        vm.editOrder = function (order, ev) {
            $mdDialog.show({
                controller:  'EditOrderController as edit',
                templateUrl: 'app/patient/part/editOrder.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true
            }).then(function (params) {                
                    alert('Ok: ' + params);
                },
                function (params) {
                    alert('Cancel: ' + params);
                }
            );

        }
        
         vm.editOrder2 = function (order) {
            alert("lalelu");
            order.stopPropagation();
        }              
    }
})();