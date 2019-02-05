var app = angular.module('blaApp',[]);

   app.controller('blaController',function($scope){
       $scope.isVisible = false;

       $scope.show = function(){
           $scope.isVisible = $scope.IsVisible = true;
       }

var appApp = angular.module('blablaApp',[]);

       app.controller('blablaController',function($scope){
           $scope.isNotVisible = false;

           $scope.hide = function(){
               $scope.isNotVisible = $scope.isNotVisible = true;
           }
       });
