(function() {
  'use strict';

  angular
    .module('wombat')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider, $mdDateLocaleProvider, moment) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
     .accentPalette('deep-orange');
   
   initializeLocaleSettings($mdDateLocaleProvider, moment); 
    
  }


  function initializeLocaleSettings($mdDateLocaleProvider, moment) {
    moment.locale('de');
    $mdDateLocaleProvider.firstDayOfWeek = 1;
    $mdDateLocaleProvider.formatDate = function(date) {
      return moment(date).format('L');
    };

    $mdDateLocaleProvider.parseDate = function(dateString) {
      
      var m = moment(dateString, ['L', 'DD.M.YYYY', 'DDMMYYYY'], true);

      return m.isValid() ? m.toDate() : new Date(NaN);
    };
  }

})();
