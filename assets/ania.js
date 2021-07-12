//import { score, NormalClick } from "./marty.js";

let score = 0;
let valueClick = 0;
let priceBtnMulti = 10; // initial price of the button
const btnMulti = (document.getElementById("multiX2").disabled = true);

NormalClick();

console.log(score);

if (score >= priceBtnMulti) {
  document.getElementById("multiX2").disabled = false;
}
//  Click +2

btnMulti.addEventListener("click", () => {
  if (score >= priceBtnMulti) {
    score -= priceBtnMulti;
    valueClick += 1;
  }
});
