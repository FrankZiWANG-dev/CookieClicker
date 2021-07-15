var Score = 0;

function SingleClick() {
  Score += 1 * bonus;
}

document.getElementById("salty").addEventListener("click", () => {
  console.log(Score);
  SingleClick();
  document.getElementById("score").innerHTML = Score;
});

//Score fonction

// function check(x,y) {
//     if (Score >= x) {
//         document.getElementById(y).disabled = false;
//     }
// }
