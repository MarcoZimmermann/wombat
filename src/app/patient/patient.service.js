(function() {
  'use strict';

  angular
    .module('wombat')
    .factory('patientService', patientService);

  /** @ngInject */
  function patientService() {
    
    var service = {            
      getPatient: getPatient
    };

    return service;

    function getPatient(id) {
      return id;
    }
  }
  
  
  
//   function tempInit(vm, moment) {
//     vm.patient = {
//       'number': '',  
//       'firstName' : 'Max',
//       'lastName' : 'Mustermann',
//       'street': 'Muster Straße',      
//       'zipCode': '12345',
//       'city': "Musterhausen",
//       birthdate: new Date('4/13/1982'),
//       doctor: { id:2, name: 'Verordner 2' },     
//       phone: '',
//       additional:'',
//       insurance: 2,
//       copaymentStart:new Date(),
//       copaymentEnd:new Date(),
//       hasPatientDeclarationSigned:true,
//       firstSupplyment:new Date(),
//       'supplymentTypes' : [
//         { supplier: 'GHD', supplymentType : 'Privat', anlage4: true, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
//           , prescriptionDate: new Date() },
//         { supplier: 'Sanlog', supplymentType : 'Privat', anlage4: false, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
//           , prescriptionDate: new Date() },
//         { supplier: 'Schug', supplymentType : 'Privat', anlage4: true, durationPrescriptionStart: new Date(), durationPrescriptionEnd: new Date()
//           , prescriptionDate: new Date() }
//       ],
//       'history' : [
//           { id:1, date: moment(new Date()).format('L'), content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du." },
//           { id:2, date: moment(new Date()).format('L'), content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du." },
//           { id:0, date: moment(new Date()).format('L'), content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du." },
//           { id:3, date: moment(new Date()).format('L'), content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du." },
//           { id:4, date: moment(new Date()).format('L'), content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du." }
//       ]
//     };
//     vm.patient.copaymentEnd.setMonth(vm.patient.copaymentStart.getMonth()+1);
      
//     vm.doctors = [];

//     vm.docs = {
//       searchText : null,
//       queryDocs : queryDocs
//     };


//     function queryDocs(query) {
//       var results = query ? vm.doctors.filter( function filterFn(doc) {
        
//         return (doc.name.search(new RegExp(query, 'i')) >= 0);
//       } ) : vm.doctors.slice(0,25);

//       return results;
//     }

//     for (var i = 0; i < 1500; i++) {
//           vm.doctors.push({id: i, name: 'Verordner '+(i+1)});
//     }


//     vm.suppliers = ['GHD', 'Sanlog', 'Schug'];
//     vm.supplymentTypes = ['Privat', 'Zeuch', 'Komisch'];

//     vm.insurances = [
//      { id: 1, name: 'AOK'},
//      { id: 2, name: 'BKK Deutsche'},
//      { id: 3, name: 'DAK'},
//      { id: 4, name: 'BKK Siemens'},
//      { id: 5, name: 'Privat'},
//      { id: 6, name: 'Selbstzahler'}
//     ]

//      vm.insurances.sort(sortPredicate);
//   }
  
// function sortPredicate(a,b) {
//     if(a.name == b.name)
//       return 0;
//     if(a.name > b.name)
//       return 1;

//     return -1;    
//    }
   
   
}
)();
