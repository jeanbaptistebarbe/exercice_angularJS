var app = angular.module('ngpatternApp', []);
app.controller('ngpatternCtrl', function ($scope) {
$scope.sendForm = function () {
$scope.msg = "Form Validated";
