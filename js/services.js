

mymod.factory('myService', function($http) {
  console.log("myService");
  return {
    foo : function(){
      return "Hello Foo";
    }
  }
});