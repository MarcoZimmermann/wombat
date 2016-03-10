(function() {
	'use strict';

	angular
		.module('wombat')
		.run(runBlock);

	/** @ngInject */
	function runBlock($rootScope,$log) {
				var stateChangeDeregistrationCallback = $rootScope.$on('$stateChangeStart', function(event, toState) {
					//event.preventDefault();
					$log.debug(toState);
				});
			
				$rootScope.$on('$destroy', stateChangeDeregistrationCallback);

		$log.debug('runBlock end');
	}

})();
