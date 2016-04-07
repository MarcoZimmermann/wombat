(function() {
  'use strict';

  angular
    .module('wombat')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
     .state('home', {
        url: '/',
        views: {
          "sideView" : {
            templateUrl: 'app/main/side.html'            
          },
          "content" : { 
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
          }
        }
      })      
      
      
      .state('demo', {
        url: '/demo',
        views: {
          "sideView" : {
            templateUrl: 'app/main/side.html'            
          },
          "content" : { 
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })      
 

   
      .state('product', {
        url: '/product',
          abstract: true,      
        views: {
          "sideView" : {
            templateUrl: 'app/main/side.html'            
          },
         'content': {
            templateUrl: 'app/product/product.html',
            controller: 'ProductController',
            controllerAs: 'vm'             
          }
        }        
      })

      .state('product.tab1', {
        url: '/tab1',
          
        views: {
           'tabContent@product': {
                template: 'Tab12',
                controller: 'ProductController',
                controllerAs: 'vm'
              }            
        }
      })
      .state('product.tab2', {
        url: '/tab2',         
        views: {         
          'tabContent@product': {
                template: 'Tab13',
                controller: 'ProductController',
                controllerAs: 'vm'
              }
        }
      })
;

    $urlRouterProvider.otherwise('/');
  }

})();
