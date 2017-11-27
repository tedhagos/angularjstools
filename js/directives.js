

mymod.directive('dirOne', function(){
  console.log("dirOne");
  return {
    template: "<h2>Dir One</h1>"
  }
});

mymod.directive('dirTwo', function(){
  console.log("dirTwo");
  return {
    template: "<h2>Dir Two</h1>",
    controller: function($scope, myService) {
      console.log("controller - Dir Two");
    }
  }
});

