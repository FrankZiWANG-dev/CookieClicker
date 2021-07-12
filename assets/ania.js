var score = parseInt(document.getElementById("score").innerHTML);

let multiplier = 1;
let priceBtnMulti = 25; // initial price of the button
const btnMulti = document.getElementById("double");

document.getElementById("salty").onclick = function () {
  var score = parseInt(document.getElementById("score").innerHTML);
  score++;
  document.getElementById("score").innerHTML = score;
};

function disableButton() {
  document.getElementById("double").disabled = true;
}

if (score == priceBtnMulti) {
  btnMulti.addEventListener("click", () => {
    score = score - priceBtnMulti;
    score.innerHTML = score;
    multiplier = multiplier * 2;
  });
} else {
  disableButton();
}
