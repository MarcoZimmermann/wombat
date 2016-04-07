(function() {
    'use strict';

    angular
        .module('wombat')
        .controller('PatientController', PatientController);

    /** @ngInject */
    function PatientController(moment, patientService, insuranceService, supplymentService) {
        var vm = this;
        vm.selectedTabIndex = 3;

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

        tempInit(vm, moment, patientService, insuranceService, supplymentService);


    } // Controller


    function tempInit(vm, moment, patientService, insuranceService, supplymentService) {

        vm.patient = patientService.getPatient(5);

        vm.suppliers = supplymentService.getSuppliers();
        vm.supplymentTypes = supplymentService.getSupplymentTypes();

        vm.insurances = insuranceService.getInsurances();

        vm.insurances.sort(sortPredicate);
    }


    function sortPredicate(a, b) {
        if (a.name == b.name)
            return 0;
        if (a.name > b.name)
            return 1;

        return -1;
    }

})();