(function() {
  'use strict';

  angular
    .module('wombat')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
   $stateProvider
      .state('patientEdit', {
        url: '/patient/{patientId:int}',        
        views: {
          sideView : {
            templateUrl: 'app/main/side.html'            
          },
          'content@' : { 
            templateUrl: 'app/patient/patient.html',
            controller: 'PatientController',
            controllerAs: 'vm'
          }
          // 'tabview@patientEdit' : {
          //     //templateUrl: 'app/product/product.html'
          //     template: '<h1>asd</h1>'
          // }
        }
         
      })

       

    // .state('patient.detail', {
    //         //url: '/{patientId:[0-9]{1,4}}',
    //         url:'',
    //         views: {
    //         //   sideView : {
    //         //     templateUrl: 'app/main/side.html'            
    //         //   },
    //         //   'content' : { 
    //         //     templateUrl: 'app/patient/patient.html',
    //         //     controller: 'PatientController',
    //         //     controllerAs: 'vm'
    //         //   },
    //           "tabview" : {
    //              templateUrl: 'app/product/product.html',
    //               controller: 'ProductController',
    //         controllerAs: 'vm'
                  
    //           }
    //         },
             
    //       })


      ;

   
     
         
  }

})();
