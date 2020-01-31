var msg = require('./mod.js');

exports.myDummy = function(x, y) {
  x = x || 0;
  y = y || 0;

  var getX = function() {
    printLog();
    return x;
  }
  
  var getY = function() {
    printLog();
    return y;
  }
  
  var printLog = function() {
    msg.runMod();
    console.log("Hello, " + msg.myVar);
  }

  // Define public interface
  this.getX = getX;
  this.getY = getY;
}