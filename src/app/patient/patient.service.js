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
            var patient = {
                id: id,
                'number': '',
                'firstName': 'Max',
                'lastName': 'Mustermann',
                'street': 'Muster Straße',
                'zipCode': '12345',
                'city': "Musterhausen",
                birthdate: new Date('4/13/1982'),
                doctor: {
                    id: 2,
                    name: 'Verordner 2'
                },
                phone: '',
                additional: '',
                insurance: 2,
                copaymentStart: new Date(),
                copaymentEnd: new Date(),
                hasPatientDeclarationSigned: true,
                firstSupplyment: new Date(),
                'supplymentTypes': [{
                    supplier: 'GHD',
                    supplymentType: 'Privat',
                    anlage4: true,
                    durationPrescriptionStart: new Date(),
                    durationPrescriptionEnd: new Date(),
                    prescriptionDate: new Date()
                }, {
                    supplier: 'Sanlog',
                    supplymentType: 'Privat',
                    anlage4: false,
                    durationPrescriptionStart: new Date(),
                    durationPrescriptionEnd: new Date(),
                    prescriptionDate: new Date()
                }, {
                    supplier: 'Schug',
                    supplymentType: 'Privat',
                    anlage4: true,
                    durationPrescriptionStart: new Date(),
                    durationPrescriptionEnd: new Date(),
                    prescriptionDate: new Date()
                }],
                'history': [{
                    id: 1,
                    date: moment(new Date()).format('L'),
                    content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du."
                }, {
                    id: 2,
                    date: moment(new Date()).format('L'),
                    content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du."
                }, {
                    id: 0,
                    date: moment(new Date()).format('L'),
                    content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du."
                }, {
                    id: 3,
                    date: moment(new Date()).format('L'),
                    content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du."
                }, {
                    id: 4,
                    date: moment(new Date()).format('L'),
                    content: "La le lu vor dem Bettchen stehn 2 Schuch, und die sind genauso Müde, drumm schlaf auch du."
                }]
            };
            patient.copaymentEnd.setMonth(patient.copaymentStart.getMonth() + 1);
            return patient;
        }
    }

})();