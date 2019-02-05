var app = angular.module('blaApp',[]);

   app.controller('blaController',function($scope){
       $scope.isVisible = false;

       $scope.show = function(){
           $scope.isVisible = $scope.IsVisible = true;
       }
       
       });
