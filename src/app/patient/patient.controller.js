(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('PatientController', PatientController);

  /** @ngInject */
  function PatientController(moment, patientService) {
    var vm = this;
    vm.selectedTabIndex = 0;
    
    vm.addSupplymentType = function() {
      vm.patient.supplymentTypes.push(
        { supplier: null, supplymentType : null, anlage4: false, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
          , prescriptionDate: new Date() });
    };

    vm.removeSupplymentType = function(item) {
      var index = vm.patient.supplymentTypes.indexOf(item);
      if(index >=0)
        vm.patient.supplymentTypes.splice(index,1);
    };

    tempInit(vm, moment, patientService);


  } // Controller


  function tempInit(vm, moment, patientService) {
  
   vm.patient = patientService.getPatient(5);

    vm.suppliers = ['GHD', 'Sanlog', 'Schug'];
    vm.supplymentTypes = ['Privat', 'Zeuch', 'Komisch'];

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
