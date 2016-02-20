(function() {
  'use strict';

  angular
    .module('wombat')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
   $stateProvider
      .state('patientOverview', {
        url: '/patient',
        views: {
          sideView : {
            templateUrl: 'app/main/side.html'            
          },
          content : { 
            templateUrl: 'app/patient/patient.html',
            controller: 'PatientController',
            controllerAs: 'vm'
          }
        },
        ncyBreadcrumb: {
          label: 'Stammdaten'          
        }         
      });   
  }

})();
