(function() {
  'use strict';

  angular
    .module('wombat')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope,$log) {


        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
        	//event.preventDefault();
        	$log.debug(toState);
       	          
        });


    $log.debug('runBlock end');
  }

})();
