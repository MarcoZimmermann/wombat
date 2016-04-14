(function() {
    'use strict';

    angular
        .module('wombat')
        .factory('ordersService', ordersService);

    /** @ngInject */
    function ordersService(moment) {

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
                  deliveryDate: moment(new Date()).format('L'),
                  orderDate: moment(new Date()).format('L'),
                  prescriptionState : 0,
                  carePeriodStart: moment(new Date()).format('L'),
                  carePeriodEnd: moment(new Date()).format('L'),
                  supplymentType: 'Komisch',
                  nextDelivery: moment(new Date()).format('L'),
                  orderState : 1
              },
               {                  
                  id:1002,
                  patientId : patientId,
                  deliveryDate: moment(new Date()).format('L'),
                  orderDate: moment(new Date()).format('L'),
                  prescriptionState : 1,
                  carePeriodStart: moment(new Date()).format('L'),
                  carePeriodEnd: moment(new Date()).format('L'),
                  supplymentType: 'Zeuch',
                  nextDelivery: moment(new Date()).format('L'),
                  orderState : 0
              }
          ];
          return orders;
      }
      
      function getOrder(orderId) {
          var order = {                  
                  id:orderId,
                  patientId : 5,
                  deliveryDate: new Date(),
                  orderDate: new Date(),
                  prescriptionState : 0,
                  carePeriodStart: new Date(),
                  carePeriodEnd: new Date(),
                  supplymentType: 'Komisch',
                  nextDelivery: new Date(),
                  orderState : 1
          };
          service.currentOrder = order;
          return order;
      }
      
      
      
    }

})();