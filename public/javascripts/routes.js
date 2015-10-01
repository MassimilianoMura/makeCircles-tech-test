'use strict';

MassiTechTest.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/step1.html',
      controller: 'firstCtrl',
      controllerAs: 'first'
    })
    .when('/second', {
      templateUrl: '/views/step2.html',
      controller: 'secondCtrl',
      controllerAs: 'second'
    })
    .otherwise({
      redirectTo: '/'
  });
});