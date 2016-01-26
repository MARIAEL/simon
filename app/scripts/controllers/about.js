'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
