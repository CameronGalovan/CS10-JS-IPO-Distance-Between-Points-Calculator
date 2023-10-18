//Coordinate distance calculator
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Get variables
  let x1 = document.getElementById("x-1").value;
  let x2 = document.getElementById("x-2").value;
  let y1 = document.getElementById("y-1").value;
  let y2 = document.getElementById("y-2").value;
  //Calculate distance
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  //Output distance
  document.getElementById("output").innerHTML = distance;
}
