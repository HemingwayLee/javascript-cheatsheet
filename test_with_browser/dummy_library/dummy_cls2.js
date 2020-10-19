function Point2(x, y) {
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
    console.log("Hello");
  }

  // Define public interface
  this.getX = getX;
  this.getY = getY;
}