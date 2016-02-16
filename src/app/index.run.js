(function() {
  'use strict';

  angular
    .module('wombat')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
