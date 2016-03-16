(function() {
  'use strict';

  angular
    .module('wombat')
    .controller('PatientController', PatientController);

  /** @ngInject */
  function PatientController() {
    var vm = this;
    vm.selectedTabIndex = 1;
    
    vm.addSupplymentType = function() {
      vm.patient.supplymentTypes.push(
        { supplier: null, supplymentType : null, anlage4: false, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
          , prescriptionDate: new Date() });
    };

    tempInit(vm);


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
      test: null,
      phone: '',
      additional:'',
      insurance: 3,
      copaymentStart:new Date(),
      copaymentEnd:new Date(),
      hasPatientDeclarationSigned:true,
      firstSupplyment:new Date(),
      'supplymentTypes' : [
        { supplier: 'GHD', supplymentType : 'Privat', anlage4: true, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
          , prescriptionDate: new Date() },
        { supplier: 'Sanlog', supplymentType : 'Privat', anlage4: false, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
          , prescriptionDate: new Date() },
        { supplier: 'Schug', supplymentType : 'Privat', anlage4: true, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
          , prescriptionDate: new Date() }
      ]
    };
    vm.patient.copaymentEnd.setMonth(vm.patient.copaymentStart.getMonth()+1);
      
    vm.doctors = [];

    vm.docs = {
      searchText : null,
      queryDocs : queryDocs
    };


    function queryDocs(query) {
      var results = query ? vm.doctors.filter( function filterFn(doc) {
        return (doc.name.indexOf(query) >= 0);
      } ) : vm.doctors.slice(0,25);

      return results;
    }

    for (var i = 0; i < 5; i++) {
          vm.doctors.push({id: i, name: 'Verordner '+(i+1)});
    }


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
