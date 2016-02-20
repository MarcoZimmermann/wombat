(function() {
  'use strict';

  angular
    .module('wombat')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $breadcrumbProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;


    $breadcrumbProvider.setOptions({
      //template: 'bootstrap2'
      templateUrl: 'app/templates/breadcrumb.html'
    });
  }

})();
