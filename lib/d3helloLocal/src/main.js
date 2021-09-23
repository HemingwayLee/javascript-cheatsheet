
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
