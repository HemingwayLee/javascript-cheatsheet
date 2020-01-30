var dummy = (function() {
  "use strict";
  
  // private functions
  function bar(res) {
    res.innerHTML += "BAR!!";
  }

  // public functions
  let publicScope = {};
  publicScope.foo = function(res) {
    res.innerHTML += "FOO!!";
    bar(res);
  }

  return publicScope;
}());