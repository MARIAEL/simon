'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {
    $scope.borra=function(colores){
    	$scope.colores=[];
    }
    $scope.colores=[];
    $scope.titulo='Simón';
    $scope.play= function(color){
    	$scope.colores.push(color);
    }
  });
