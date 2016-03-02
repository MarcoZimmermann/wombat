(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('PatientController', PatientController);

  /** @ngInject */
  function PatientController($scope,$location, $state, $stateParams) {
    var vm = this;
    vm.selectedTabIndex = 1;

    $scope.$on('$destroy', function(a,b,c,d)
    {
        var z=0;
    });

    tempInit(vm);

    vm.onTest = function() {
      $scope.patientForm.$setPristine();

    };

  } // Controller


  function tempInit(vm) {
    vm.patient = {
          'firstName' : 'Max',
          'lastName' : 'Mustermann',
          'street': 'Muster Straße',      
          'zipCode': '12345',
          'city': "Musterhausen",
          birthdate: new Date('4/13/1982'),
          doctor: 2,
          phone: '',
          additional:'',
          insurance: 3,
          copaymentStart:new Date(),
          copaymentEnd:new Date()

        };
      
       vm.doctors = [
         { id: 1, name: 'Verordner 1'},
         { id: 2, name: 'Verordner 2'},
         { id: 3, name: 'Verordner 3'}
       ];

       vm.insurances = [
         { id: 1, name: 'AOK'},
         { id: 2, name: 'BKK Deutsche'},
         { id: 3, name: 'DAK'},
         { id: 4, name: 'BKK Siemens'},
         { id: 5, name: 'Privat'},
         { id: 6, name: 'Selbstzahler'}
         
       ]

       vm.insurances.sort(sortPredicate);
  }
  
function sortPredicate(a,b) {
    if(a.name == b.name)
      return 0;
    if(a.name > b.name)
      return 1;

    return -1;    
   }

})();
