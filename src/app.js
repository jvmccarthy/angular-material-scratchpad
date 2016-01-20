var app = angular.module('angular-material-scratchpad', [
  'ngMaterial',
]);

app.controller('AppController', function($mdSidenav) {
  var vm = this;
  vm.toggleRight = toggleRight;
  
  //////////////
  
  function toggleRight() {
    $mdSidenav('right').toggle();
  }
});