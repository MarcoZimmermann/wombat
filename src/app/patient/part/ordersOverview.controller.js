(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('OrdersOverviewController', OrdersOverviewController);

    /** @ngInject */
    function OrdersOverviewController($scope, $stateParams, $mdDialog, ordersService) {
        var vm = this;
        
        vm.patientOrders = ordersService.getOrders($stateParams.patientId).map(function (o) {
            return {
                id: o.id,
                patientId: o.patientId,
                deliveryDate: moment(o.deliveryDate).format('L'),
                orderDate: moment(o.orderDate).format('L'),
                prescriptionState: o.prescriptionState,
                carePeriodStart: moment(o.carePeriodStart).format('L'),
                carePeriodEnd: moment(o.carePeriodEnd).format('L'),
                supplymentType: o.supplymentType,
                nextDelivery: moment(o.nextDelivery).format('L'),
                orderState: o.orderState
            };
        });
        vm.selectedOrder = null;

        $scope.$watch(function () { return ordersService.currentOrder; }
            , function () {
            if (ordersService.currentOrder == null)
                vm.selectedOrder = null;    
        });

        

        vm.editOrder = function (order, ev) {
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