document.getElementById("boost").disabled = true;

//Boost level to change prices and bonuses
var BoostLevel = 0; 

//Level up boost and remove points for price
function BuyBoost() {
  if (BoostLevel == 0){
    Score = Score - 10;
    document.getElementById("score").innerHTML = Score;
    document.getElementById("boostvalue").innerHTML = " x2";
    document.getElementById("boostcost").innerHTML = " 10";
    BoostLevel++;
  }
  else if (BoostLevel == 1){
    Score = Score - 20;
    document.getElementById("score").innerHTML = Score;
    document.getElementById("boostvalue").innerHTML = " x4";
    document.getElementById("boostcost").innerHTML = " 20";
    BoostLevel++;
  }
  else if (BoostLevel == 2){
    Score = Score - 30;
    document.getElementById("score").innerHTML = Score;
    document.getElementById("boostvalue").innerHTML = " x6";
    document.getElementById("boostcost").innerHTML = " 30";
    BoostLevel++;
  }
  else if (BoostLevel == 3){
    Score = Score - 40;
    document.getElementById("score").innerHTML = Score;
    document.getElementById("boostvalue").innerHTML = " x8";
    document.getElementById("boostcost").innerHTML = " 40";
    BoostLevel++;
  }
  else {
    Score = Score - 50;
    document.getElementById("score").innerHTML = Score;
    document.getElementById("boostvalue").innerHTML = " x10";
    document.getElementById("boostcost").innerHTML = " 50";
  }
}

//Timer
var BoostRemaining = 0;

function Timing() {

  BoostRemaining = 30;
  var BoostTimer = document.getElementById('BoostTimer');

  var BoostDuration = setInterval(BoostCountdown, 1000);

  function BoostCountdown() {
    // console.log(Score);
    if (BoostRemaining !== 0) {
      BoostTimer.innerHTML = BoostRemaining;
      BoostRemaining--;
    } 
    else {
      BoostTimer.innerHTML = BoostRemaining;
      clearTimeout(BoostDuration);
    }
  }
}

//Check boost availability
function BoostAvailability() {
  if ( (BoostRemaining ==0) && (BoostLevel == 0) && (Score>= 10) ){
    document.getElementById("boost").disabled =false;
  }
  else if ( (BoostRemaining ==0) && (BoostLevel == 1) && (Score>= 20) ){
    document.getElementById("boost").disabled =false;
  }
  else if ( (BoostRemaining ==0) && (BoostLevel == 2) && (Score>= 30) ){
    document.getElementById("boost").disabled =false;
  }
  else if ( (BoostRemaining ==0) && (BoostLevel == 3) && (Score>= 40) ){
    document.getElementById("boost").disabled =false;
  }
  else if ( (BoostRemaining ==0) && (BoostLevel == 4) && (Score>= 50) ){
    document.getElementById("boost").disabled =false;
  }
  else {
    document.getElementById("boost").disabled=true;
  }
}
var CheckBoost = setInterval(function(){BoostAvailability()},100);

//activate click bonus
function ActivateBoost() {
  //lv1 = x2
  if ( (bonus ==0) && (BoostRemaining !== 0) && (BoostLevel == 1 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -1 + 2;
      document.getElementById("score").innerHTML = Score;
    });
  }
  else if ( (bonus == 1) && (BoostRemaining !== 0) && (BoostLevel == 1 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -2 + 4;
      document.getElementById("score").innerHTML = Score;
    });
  }

  //lv2 = x4
  else if ( (bonus ==0) && (BoostRemaining !== 0) && (BoostLevel == 2 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -1 + 4;
      document.getElementById("score").innerHTML = Score;
    });
  }
  else if ( (bonus ==1) && (BoostRemaining !== 0) && (BoostLevel == 2 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -2 + 8;
      document.getElementById("score").innerHTML = Score;
    });
  }

  //lv3 = x6
  else if ( (bonus ==0) && (BoostRemaining !== 0) && (BoostLevel == 3 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -1 + 6;
      document.getElementById("score").innerHTML = Score;
    });
  }
  else if ( (bonus ==1) && (BoostRemaining !== 0) && (BoostLevel == 3 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -2 + 12;
      document.getElementById("score").innerHTML = Score;
    });
  }

  //lv4 = x8
  else if ( (bonus ==0) && (BoostRemaining !== 0) && (BoostLevel == 4 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -1 + 8;
      document.getElementById("score").innerHTML = Score;
    });
  }
  else if ( (bonus ==1) && (BoostRemaining !== 0) && (BoostLevel == 4 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -2 + 16;
      document.getElementById("score").innerHTML = Score;
    });
  }

  //lv5 = x10
  else if ( (bonus ==0) && (BoostRemaining !== 0) && (BoostLevel == 5 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -1 + 10;
      document.getElementById("score").innerHTML = Score;
    });
  }
  else if ( (bonus ==1) && (BoostRemaining !== 0) && (BoostLevel == 5 ) ){
    document.getElementById('salty').addEventListener("click",() => {
      console.log(Score);
      Score = Score -2 + 20;
      document.getElementById("score").innerHTML = Score;
    });
  }

}

//click function
document.getElementById("boost").addEventListener("click", () => {
  Timing();
  BuyBoost();
  ActivateBoost();
});