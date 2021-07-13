//import { score, NormalClick } from "./marty.js";

let score = 0;
let priceBtnMulti = 10; // initial price of the button
let btnMulti = (document.getElementById("multiX2").disabled = true);

console.log(score);

//  Click +2

function multi() {
  score += 2;
}

console.log(score);

document.getElementById("salty").addEventListener("click", () => {
  document.getElementById("score").innerHTML = Score;

  check();
});

document.getElementById("multiX2").addEventListener("click", () => {
  multi();
  document.getElementById("score").innerHTML = Score;
  console.log(score);
  check();
});

function check() {
  if (Score > priceBtnMulti) {
    document.getElementById("multiX2").disabled = false;
  }
}
check();
