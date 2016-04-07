(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('OrdersOverviewController', OrdersOverviewController);

    /** @ngInject */
    function OrdersOverviewController() {
        var vm = this;
        
        vm.editOrder = function (order) {
            alert(order);
        }       
    }
})();