if (Score < 10) {
  document.getElementById("boost").disabled = true;
}
else {
  document.getElementById("boost").disabled = false;
}

document.getElementById("boost").addEventListener("click", () => {

var BoostRemaining = 30;
var BoostTimer = document.getElementById('BoostTimer');

var BoostDuration = setInterval(BoostCountdown, 1000);

function BoostCountdown() {
  // console.log(Score);
  if (BoostRemaining !== -1) {
    BoostTimer.innerHTML = BoostRemaining;
    BoostRemaining--;
  } 
  else {
    clearTimeout(BoostDuration);
  }
}

})

