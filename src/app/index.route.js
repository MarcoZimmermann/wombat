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
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }        
      });

    $urlRouterProvider.otherwise('/');
  }

})();
