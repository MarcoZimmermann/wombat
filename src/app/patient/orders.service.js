(function() {
    'use strict';

    angular
        .module('wombat')
        .factory('ordersService', ordersService);

    /** @ngInject */
    function ordersService(moment) {
        var m_moment = moment;
        var service = {
            getOrders: getOrders,
            getOrder: getOrder,
            currentOrder : null
        };

        return service;

        
      function getOrders(patientId) {
          var orders = [ 
              {                  
                  id:1001,
                  patientId : patientId,
                  deliveryDate: new Date(),
                  orderDate: new Date(),
                  prescriptionState: 0,
                  prescriptionToSupplier: new Date(),
                  carePeriodStart: new Date(),
                  carePeriodEnd: new Date(),
                  supplymentType: 'Komisch',
                  nextDelivery: new Date(),
                  durationPrescriptionStart: m_moment(new Date()).format('L'),
                  durationPrescriptionEnd: m_moment(new Date()).format('L'),
                  orderState : 1
              },
               {                  
                  id:1002,
                  patientId : patientId,
                  deliveryDate: new Date(),
                  orderDate: new Date('01.01.2016'),
                  prescriptionState: 1,
                  prescriptionToSupplier: new Date(),
                  carePeriodStart: new Date(),
                  carePeriodEnd: new Date(),
                  carePeriod: '14 Tage',
                  supplymentType: '',
                  nextDelivery: new Date(),
                   durationPrescriptionStart: m_moment(new Date()).format('L'),
                  durationPrescriptionEnd: m_moment(new Date()).format('L'),
                  orderState : 0
              }
          ];
          return orders;
      }
      
      function getOrder(orderId) {
          var order = getOrders().filter(function (x) { return x.id == orderId})[0];          
           service.currentOrder = order;
           return order;
      }
    }

})();