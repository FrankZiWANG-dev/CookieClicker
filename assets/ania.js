//import { score, NormalClick } from "./marty.js";

let score = 0;
let valueClick = 0;
let priceBtnMulti = 10; // initial price of the button
const btnMulti = (document.getElementById("multiX2").disabled = true);

console.log(score);

if (score >= 10) {
  document.getElementById("multiX2").disabled = false;
}
//  Click +2

btnMulti.addEventListener("click", () => {
  if (score >= priceBtnMulti) {
    score -= priceBtnMulti;
    valueClick += 1;
  }
});

if (score >= priceBtnMulti) {
  score -= priceBtnMulti;
  valueClick += 1;
  priceBtnMulti += Math.floor((priceBtnMulti / 100) * 15);
}
