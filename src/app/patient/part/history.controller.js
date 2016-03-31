(function() {
  'use strict';

angular
    .module('wombat')
    .controller('HistoryController', HistoryController);
    
  /** @ngInject */
function HistoryController() {
    var vm = this;
    
    vm.deleteItem = function(item, patient) {
        var index = patient.history.indexOf(item);
        if(index >=0)
            patient.history.splice(index,1);
    
    }
    
    vm.saveItem = function(item) {
        alert("Speichere "+item.content);
        toggleEdit(item);
    }
    
    vm.cancelEdit = function(item) {
        toggleEdit(item);
    }
    
    function toggleEdit(item) {
        item.isEdit = !item.isEdit;
    }
}
// Controller

})();
