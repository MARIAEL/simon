'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
