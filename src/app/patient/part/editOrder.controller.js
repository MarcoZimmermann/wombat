(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('EditOrderController', EditOrderController);

    /** @ngInject */
    function EditOrderController($scope, $stateParams, ordersService) {
        var vm = this;
        
        var order = ordersService.currentOrder;
        vm.order = order;

        $scope.$watch(function() { return ordersService.currentOrder }, function () {
            vm.order = ordersService.currentOrder;    
        });        


        vm.carePeriods =
            ['7 Tage',
            '10 Tage',
            '14 Tage',
            '4 Wochen',
            '8 Wochen',
            '3 Monate',
            'Sonstiges']        


        vm.cancel = function () {
            vm.order = null;
            ordersService.currentOrder = null;
        }

        function changeCurrentOrder() {
            
        }
    }
})();