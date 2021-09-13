(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dummy = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./mod.js":2}],2:[function(require,module,exports){
exports.myVar = 5566;

exports.runMod = function(ele) {
  var e = document.createElement('p');
  e.innerHTML = "In mod.js";
  ele.appendChild(e);
};

},{}]},{},[1])(1)
});
