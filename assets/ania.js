var score = parseInt(document.getElementById("score").innerHTML);

let multiplier = 1;
let priceBtnMulti = 25; // initial price of the button
const btnMulti = document.getElementById("double");
const scoreTitle = document.getElementById("score");

// FUNCTION CLICKER

function clicker() {
  document.getElementById("salty").onclick = function () {
    var score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
  };
}
clicker();

// DISABLE

function disable() {
  document.getElementById("double").disabled = true;
  document.getElementById("boost").disabled = true;
  document.getElementById("auto-click").disabled = true;

  if (score >= priceBtnMulti) {
    document.getElementById("double").disabled = false;
  }
}
// FUNCTION x2

if (score >= priceBtnMulti) {
  btnMulti.addEventListener("click", () => {
    score = score - priceBtnMulti;
    score.innerHTML = score;
  });
}
