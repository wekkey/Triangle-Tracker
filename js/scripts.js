
function triangleTracker(){
  var l = parseInt(document.getElementById("l").value);
  var w = parseInt(document.getElementById("w").value);
  var h= parseInt(document.getElementById("h").value);
    if (l === w && w === h && l === h) {
      alert("Equilateral Triangle");
  }
  else if (l === w || w === h || l === h ) {
    alert("Isosceles Triangle");
  }

  

  }
