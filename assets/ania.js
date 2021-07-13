//import { score, NormalClick } from "./marty.js";

let priceBtnMulti = 25; // initial price of the button
let btnMulti = (document.getElementById("multiX2").disabled = true);

function SingleClick() {
  if (bonus === 1) {
    Score += 2;
  } else if (bonus === 0) {
    Score++;
  }
}

//  Click +2

function multi() {
  Score += 2;
}

console.log(score);

document.getElementById("salty").addEventListener("click", () => {
  document.getElementById("score").innerHTML = Score;

  check();
});
var bonus = 0;
document.getElementById("multiX2").addEventListener("click", () => {
  multi();
  bonus += 1;
  Score -= priceBtnMulti;
  multi(Score);
  document.getElementById("score").innerHTML = Score;
  console.log(Score);
  check();
  document.getElementById("multiX2").disabled = true;
});

function check() {
  if (Score > priceBtnMulti) {
    document.getElementById("multiX2").disabled = false;
  }
}

