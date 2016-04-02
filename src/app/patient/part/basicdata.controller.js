(function() {
  'use strict';

angular
    .module('wombat')
    .controller('BasicDataController', BasicDataController);
    
  /** @ngInject */
function BasicDataController(doctorService) {
    var vm = this;
    
    vm.docSearchText = null;
    vm.doctors = [];
    
    
    doctorService.getDoctors().then(function (docs) {
        vm.doctors = docs;
    });
    
    
    vm.queryDocs =function(query) {
        if(!query)
            return vm.doctors.slice(0,25);
            
      var results = vm.doctors.filter(function filterFn(doc) {
        return (doc.name.search(new RegExp(query, 'i')) >= 0);
    });
      return results.slice(0,25);
    }
    
    
   
}
// Controller

})();
