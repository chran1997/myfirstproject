

function myFunction() {
var a = document.createElement("table");
  var x = document.createElement("TBODY");
  
  var y = document.createElement("TR");
   x.appendChild(y);
  
  var z = document.createElement("TD");
  z.innerHTML = "Sl.No";
  y.appendChild(z);
 
var b = document.createElement("TD");
  b.innerHTML = "NAME";
  y.appendChild(b);

var c = document.createElement("TD");
  c.innerHTML = "ID";
  y.appendChild(c);

var d = document.createElement("TD");
  d.innerHTML = "AGE";
  y.appendChild(d);

var e = document.createElement("TD");
  e.innerHTML = "GENDER";
  y.appendChild(e);
  
 document.getElementById("myTable").appendChild(x);
}


function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
  cell1.innerHTML = "SL.No";
  cell2.innerHTML = "NAME";
  cell3.innerHTML = "ID";
  cell4.innerHTML = "AGE";
  cell5.innerHTML = "GENDER";


}
function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}


