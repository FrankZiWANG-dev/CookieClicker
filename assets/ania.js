var valueClick = 1;
var priceBtnMulti = 25; // initial price of the button
const btnMulti = document.getElementById("multiX2");
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
  document.getElementById("multiX2").disabled = true;
  document.getElementById("boost").disabled = true;
  document.getElementById("auto-click").disabled = true;
}
disable();
if (score >= priceBtnMulti) {
  document.getElementById("multiX2").disabled = false;
}
// FUNCTION x2

btnMulti.addEventListener("click", () => {
  if (score >= priceBtnMulti) {
    score -= priceBtnMulti;
    valueClick += 1;
  }
});
