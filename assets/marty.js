// replace score by 0

let score = parseInt(document.getElementById("score").innerHTML);

function NormalClick() {
  score++;
  document.getElementById("score").innerHTML = score;
}
// replace by addEventListener instead
document.getElementById("salty").onclick = function () {
  NormalClick();
};

export { score, NormalClick };
