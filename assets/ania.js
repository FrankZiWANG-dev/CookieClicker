//import { score, NormalClick } from "./marty.js";

let priceBtnMulti = 25; // initial price of the button
var bonus = 1;

// Salt rotation

function myFunction() {
  var img = document.getElementById("salty");
  img.setAttribute("class", "rotated-image");
}

console.log(score);

document.getElementById("salty").addEventListener("click", () => {
  document.getElementById("score").innerHTML = Score;
  document.getElementById("salty").style.transform = "rotate(45deg)";
  setTimeout(() => {
    document.getElementById("salty").style.transform = "rotate(0)";
  }, 100);
});

document.getElementById("multiX2").addEventListener("click", () => {
  if (Score >= 25) {
    bonus++;
    Score -= priceBtnMulti;
    document.getElementById("score").innerHTML = Score;
    console.log(Score);
    console.log(bonus + "lalala");
  }
});
function check() {
  if (Score >= 25) {
    document.getElementById("multiX2").disabled = false;
  } else if (Score < 25) {
    document.getElementById("multiX2").disabled = true;
  }
}
