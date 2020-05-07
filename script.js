/*-When the "Take off" button is clicked, the text "The shuttle is on the ground" changes to "Houston, \
  we have lift off!". The "Take off" button has an id of "liftoff".
  -When the user's mouse goes over the "Abort Mission" button, the button's background turns red.
  The "Abort Mission" button has an id of "abortMission".
  -When the user clicks the "Abort Mission" button, make a confirmation window that says
  "Are you sure you want to abort the mission?".
*/

let button = null;
let paragraph = null;
let missionAbort = null;

function init() {
  missionAbort = document.getElementById("abortMission");
  button = document.getElementById("liftoff");
  paragraph = document.querySelector("p");

  // Put your code for the exercises here.
  document.getElementById("liftoff").onclick = () =>
    (document.getElementById("myText").innerHTML =
      "Houston, we have lift off!");

  document.getElementById("abortMission").onmouseover = () =>
    (document.getElementById("abortMission").style.backgroundColor = "red");

  document.getElementById("abortMission").onclick = () =>
    confirm("Are you sure you want to abort the mission?");
}

window.onload = init;
