document.getElementById("boost").addEventListener("click", () => {

var BoostRemaining = 30;
var BoostTimer = document.getElementById('BoostTimer');

var BoostDuration = setInterval(BoostCountdown, 1000);

function BoostCountdown() {
  if (BoostRemaining !== 0) {
    BoostTimer.innerHTML = BoostRemaining;
    BoostRemaining--;
  } 
  else {
    clearTimeout(BoostDuration);
  }
}

})

