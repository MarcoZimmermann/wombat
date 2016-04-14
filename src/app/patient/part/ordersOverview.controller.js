(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('OrdersOverviewController', OrdersOverviewController);

    /** @ngInject */
    function OrdersOverviewController($scope, $stateParams, $mdDialog, ordersService) {
        var vm = this;
        
        vm.patientOrders = ordersService.getOrders($stateParams.patientId);
        vm.selectedOrder = null;

        var destructor = $scope.$watch(function() {
            return ordersService.currentOrder;
        }, function () {
            if (ordersService.currentOrder == null)
                vm.selectedOrder = null;    
        });

        $scope.$on('$destroy', function () {
                destructor();
            });
        

        vm.editOrder = function (order) {
            ordersService.getOrder(order.id);
            vm.selectedOrder = order; 
            // $mdDialog.show({
            //     controller:  'EditOrderController as edit',
            //     templateUrl: 'app/patient/part/editOrder.html',
            //     parent: angular.element(document.body),
            //     targetEvent: ev,
            //     clickOutsideToClose: true,
            //     fullscreen: true
            // }).then(function (params) {                
                    
            //     },
            //     function (params) {
                    
            //     }
            // );

        }
        
         vm.editOrder2 = function (order) {
            alert("lalelu");
            order.stopPropagation();
        }              
    }
})();