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


        vm.prescriptionStates =
            ['Kein Rezept',
            'Rezept Angefordert',
            'Rezept OK'
            ]        


        vm.cancel = function () {
            vm.order = null;
            ordersService.currentOrder = null;
        }

        function changeCurrentOrder() {
            
        }
    }
})();