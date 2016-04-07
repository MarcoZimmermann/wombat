(function() {
    'use strict';

    angular
        .module('wombat')
        .factory('supplymentService', supplymentService);

    /** @ngInject */
    function supplymentService() {
        var service = {
            getSuppliers: getSuppliers,
            getSupplymentTypes : getSupplymentTypes
        };

        return service;
        
        
        function getSuppliers() {
             return ['GHD', 'Sanlog', 'Schug'];
        }
        
        function getSupplymentTypes() {
            return ['Privat', 'Zeuch', 'Komisch'];        
        }
    }
})();