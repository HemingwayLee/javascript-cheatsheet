(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dummy = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

exports.myDummy = function(x, y) {
  x = x || 0;
  y = y || 0;

  var getX = function() {
    return x;
  }
  
  var getY = function() {
    return y;
  }
  
  var printD3 = function() {
    d3.select('div#neuron-vis > *').remove();
    nn_svg = d3.select('div#neuron-vis')
      .append("div")
      .append("svg")
      .attr("width", 150)
      .attr("height", 150)

    nn_svg.append("circle")
      .attr("cx", 25)
      .attr("cy", 25)
      .attr("r", 25)
      .style("fill", "purple")

    nn_svg.append("line")
      .attr("x1", 50)
      .attr("x2", 150)
      .attr("y1", 25)
      .attr("y2", 25)
      .attr("stroke", "purple")
      .attr("stroke-width", 2);
  }

  // Define public interface
  this.getX = getX;
  this.getY = getY;
  this.printD3 = printD3;
}

},{}]},{},[1])(1)
});
