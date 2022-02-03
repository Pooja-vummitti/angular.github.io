var myapp = angular.module('design', []);
      /*Dependency Injection*/
      myapp.controller('designctrl',function($scope,$http)
{
   $http.get('https://pooja-vummitti.github.io/angular.github.io/design.json')
   .success(function(response)
{
  $scope.names=response.design;
  $scope.rowlimit=6;
}
);
});
© 2022 GitHub, Inc.
