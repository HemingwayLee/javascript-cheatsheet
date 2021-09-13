exports.myVar = 5566;

exports.runMod = function(ele) {
  var e = document.createElement('p');
  e.innerHTML = "In mod.js";
  ele.appendChild(e);
};
