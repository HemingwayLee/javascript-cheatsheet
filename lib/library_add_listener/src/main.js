var msg = require('./mod.js');

exports.myDummy = function(ele, x, y) {
  x = x || 0;
  y = y || 0;

  function saySomething() {
    console.log("aha");
  }

  var getX = function() {
    printLog();
    return x;
  }
  
  var getY = function() {
    printLog();
    return y;
  }
  
  var printLog = function() {
    msg.runMod(ele);

    var e = document.createElement('p');
    e.innerHTML = "Hello, " + msg.myVar;
    ele.appendChild(e);
    ele.addEventListener('click', function(){
      saySomething();
    }, false);
  }

  // Define public interface
  this.getX = getX;
  this.getY = getY;
}