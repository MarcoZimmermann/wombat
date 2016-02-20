(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('PatientController', PatientController);

  /** @ngInject */
  function PatientController() {
    var vm = this;


    vm.patient = {
      'firstName' : 'Max',
      'lastName' : 'Mustermann',
      'street': 'Muster Straße',      
      'zipCode': '12345',
      'city': "Musterhausen",
      birthdate: new Date('4/13/1982'),
      doctor: 2

    };
  
   vm.doctors = [
     { id: 1, name: 'Verordner 1'},
     { id: 2, name: 'Verordner 2'},
     { id: 3, name: 'Verordner 3'}
   ];



  }
})();
