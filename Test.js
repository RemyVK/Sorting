// JavaScript sorting
var msg = document.getElementById("message");

var v = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark", "elephant"];
msg.innerHTML += "<p><strong>Original order:</strong> [" + v + "]<p>";
msg.innerHTML += "<p><strong>Alphabeticaly sorted order:</strong> [" + v.sort() + "]<p>";
msg.innerHTML += "<p><strong>Sorted according to length :</strong> [" + v.sort(sortwithlength)+ "]<p>";
function sortwithlength(a, b){
    return a.length - b.length;
  }
