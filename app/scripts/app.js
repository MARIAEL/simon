'use strict';

/**
 * @ngdoc overview
 * @name simonApp
 * @description
 * # simonApp
 *
 * Main module of the application.
 */
angular
  .module('simonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/simon', {
        templateUrl: 'views/simon.html',
        controller: 'SimonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
