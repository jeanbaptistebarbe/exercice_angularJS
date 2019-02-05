var carsArray = angular.module('carsApp',[]);
carsArray.controller('carsCtrl',function($scope,$http){
$http.get('assets/js/cars.json').then(function(result){
  $scope.arrayCars = result.data;
});
});
