//import {score} from "/assets/marty.js";


let priceAutoClick = 5;
const buttonAutoClick = score;
//debugging
console.log("Joao score 1st is = " + score);

if (priceAutoClick > score) {
    buttonAutoClick.disabled = true;
    //debugging
    console.log("Joao disable score  is = " + score);
} else {  
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{
        var autoclick = window.setInterval(
            function autoClickFunction () {
                score - priceAutoClick;
                score ++;
                //debugging
                console.log("Joao score auto-click is = " + score);
            }, 5000);
    });
}



//debugging
console.log("Joao final score is = " + score);