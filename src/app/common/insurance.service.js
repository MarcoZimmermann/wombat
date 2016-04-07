(function() {
    'use strict';

    angular
        .module('wombat')
        .factory('insuranceService', insuranceService);

    /** @ngInject */
    function insuranceService() {
        var service = {
            getInsurances: getInsurances         
        };

        return service;
        
        
        function getInsurances() {
             return [
                    { id: 1, name: 'AOK'},
                    { id: 2, name: 'BKK Deutsche'},
                    { id: 3, name: 'DAK'},
                    { id: 4, name: 'BKK Siemens'},
                    { id: 5, name: 'Privat'},
                    { id: 6, name: 'Selbstzahler'}
                ];
        }   
    }
})();