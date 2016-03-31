(function() {
  'use strict';

angular
    .module('wombat')
    .controller('BasicDataController', BasicDataController);
    
  /** @ngInject */
function BasicDataController() {
    var vm = this;
    
    vm.docSearchText = null;
    vm.doctors = [];
    
    vm.doctors.push({id: 0, name: 'Verordner 0, Muster Straße 123 in 92237 Sulzbach-Rosenberg'});
    for (var i = 1; i < 1500; i++) {
        vm.doctors.push({id: i, name: 'Verordner '+(i+1)});
    }
    
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
