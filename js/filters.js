

mymod.filter('greet', function() {
  return function(name) {
    return "Hei "  + name;
  }
});