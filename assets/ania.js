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

// FUNCTION DISABLE

// function disableButton() {
//   document.getElementById("double").disabled = true;
//   //let btnClick = document.querySelectorAll(".btn")
// }

// FUNCTION x2

if (score == 25) {
  document.getElementById("double").removeAttribute("disabled");
  btnMulti.addEventListener("click", () => {
    score = score - priceBtnMulti;
    score.innerHTML = score;
  });
}
