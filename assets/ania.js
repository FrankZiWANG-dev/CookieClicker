var Score = document.getElementById("score").textContent;
// console.log(Score);

let multiplier = 1;
let priceBtnMulti = 100;
const btnMulti = document.getElementById("multiplier");

btnMulti.addEventListener("click", () => {
  Score = Score - priceBtnMulti;
  score.innerHTML = Score;
  multiplier = multiplier * 2;
});
