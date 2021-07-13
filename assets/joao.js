//import {Score} from "/assets/marty.js";


let priceAutoClick = 5;
const buttonAutoClick = document.getElementById("auto-click");
//debugging
console.log("Joao 1st Score is = " + Score);

if (priceAutoClick > Score) {
    buttonAutoClick.disabled = true;
    //debugging
    console.log("Joao disable Score  is = " + Score);
} else {  
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{
        var autoclick = window.setInterval(
            function autoClickFunction () {
                Score - priceAutoClick;
                Score ++;
                //document.getElementById("score").innerHTML = Score;
                //debugging
                console.log("Joao Score auto-click is = " + Score);
            }, 5000);
    });
}



//debugging
console.log("Joao final Score is = " + Score);