var score = parseInt(document.getElementById("score").innerHTML);

let multiplier = 1;
let priceBtnMulti = 25; // initial price of the button
const btnMulti = document.getElementById("double");
const scoreTitle = document.getElementById("score");

// FUNCTION CLICKER

document.getElementById("salty").onclick = function () {
  var score = parseInt(document.getElementById("score").innerHTML);
  score++;
  document.getElementById("score").innerHTML = score;
};

// FUNCTION DISABLE

function disableButton() {
  document.getElementById("double").disabled = true;
  //let btnClick = document.querySelectorAll(".btn")
}
// FUNCTION x2

// if (score == priceBtnMulti) {
//   btnMulti.addEventListener("click", () => {
//     score = score - priceBtnMulti;
//     score.innerHTML = score;
//     multiplier = multiplier * 2;
//   });
// } else {
//   disableButton();
// }

//if (score == priceBtnMulti) {
btnMulti.addEventListener("click", () => {
  score = score - priceBtnMulti;
  scoreTitle.innerHTML = score;
  priceBtnMulti = Math.floor(priceBtnMulti * 2);
  let displayPrice = btnMulti.getElementsByClassName("price");
  displayPrice[0].children[0].textContent = priceBtnMulti;
  //multiplier = multiplier * 2;
});
// } else {
//   disableButton();
// }
