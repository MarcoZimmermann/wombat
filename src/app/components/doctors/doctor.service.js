(function() {
    'use strict';

    angular
        .module('wombat')
        .factory('doctorService', doctorService);

    /** @ngInject */
    function doctorService($q,$timeout) {
        var service = {
            getDoctors: getDoctors
        };

        return service;

        function getDoctors() {          
            var deferred = $q.defer();
          
            $timeout(function() {                
                var doctors = [];
                doctors.push({ id: 0, name: 'Verordner 0, Muster Straße 123 in 92237 Sulzbach-Rosenberg'});
                
                for (var i = 1; i < 1500; i++) {
                    doctors.push({ id: i, name: 'Verordner ' + (i + 1)});
                }
                deferred.resolve(doctors);               
                              
            }, 1);
            return deferred.promise;  
        }
    }
})();