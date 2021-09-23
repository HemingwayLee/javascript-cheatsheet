var msg = require('./mod.js');

exports.myDummy = function(ele, x, y) {
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
    msg.runMod(ele);

    var e = document.createElement('p');
    e.innerHTML = "Hola, " + msg.myVar + "!!";
    ele.appendChild(e);
  }

  // Define public interface
  this.getX = getX;
  this.getY = getY;

  return this;
}
