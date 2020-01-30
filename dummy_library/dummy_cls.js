function Point(x, y) {
  this.x = x;
  this.y = y;
}

// all public
Point.prototype = {
  x: 0,
  y: 0,

  constructor: Point,

  isAbove: function(p) {
    return this.y > p.y;
  },

  isBelow: function(p) {
    return this.y < p.y;
  }
};