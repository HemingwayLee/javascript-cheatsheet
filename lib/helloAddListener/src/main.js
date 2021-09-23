var msg = require('./mod.js');

exports.myDummy = function(ele, x, y) {
  x = x || 0;
  y = y || 0;

  function saySomething() {
    console.log("aha");
  }

  function toBlue(selected) {
    selected.style.color = "blue";
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

    // It works
    // e.addEventListener('click', saySomething);
    
    e.addEventListener('click', function() {
      toBlue(e);
    })
    
    ele.appendChild(e);
  }

  // Define public interface
  this.getX = getX;
  this.getY = getY;
}