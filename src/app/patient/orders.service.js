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
                  deliveryDate: new Date(),
                  orderDate: new Date(),
                  prescriptionState : 0,
                  carePeriodStart: new Date(),
                  carePeriodEnd: new Date(),
                  supplymentType: 'Komisch',
                  nextDelivery: new Date(),
                  orderState : 1
              },
               {                  
                  id:1002,
                  patientId : patientId,
                  deliveryDate: new Date(),
                  orderDate: new Date('01.01.2016'),
                  prescriptionState : 1,
                  carePeriodStart: new Date(),
                  carePeriodEnd: new Date(),
                  supplymentType: 'Zeuch',
                  nextDelivery: new Date(),
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