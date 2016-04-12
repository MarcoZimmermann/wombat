(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('PatientController', PatientController);

    /** @ngInject */
    function PatientController($stateParams, moment, patientService, insuranceService, supplymentService) {
        var vm = this;
        vm.selectedTabIndex = 3;

        initSupplymentEvents(vm);
        
        vm.patient = patientService.getPatient($stateParams.patientId);

        vm.suppliers = supplymentService.getSuppliers();
        vm.supplymentTypes = supplymentService.getSupplymentTypes();

        vm.insurances = insuranceService.getInsurances();
       

    } // Controller

    function initSupplymentEvents(vm) {
        vm.addSupplymentType = function() {
            vm.patient.supplymentTypes.push({
                supplier: null,
                supplymentType: null,
                anlage4: false,
                durationPrescriptionStart: new Date(),
                durationPrescriptionEnd: new Date(),
                prescriptionDate: new Date()
            });
        };

        vm.removeSupplymentType = function(item) {
            var index = vm.patient.supplymentTypes.indexOf(item);
            if (index >= 0)
                vm.patient.supplymentTypes.splice(index, 1);
        };
    }
    
})();