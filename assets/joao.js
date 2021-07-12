import {score} from "/assets/marty.js";


let priceAutoClick = 5;
const buttonAutoClick = document.getElementById("auto-click");
console.log("Joao score is = " + score);

if (priceAutoClick > score) {
    buttonAutoClick.disabled = true;
    console.log("Joao score is = " + score);
} else {  
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{
        var autoclick = window.setInterval(
            function autoClickFunction () {
                score - priceAutoClick;
                score ++;
                //debugging
                console.log("Joao score is = " + score);
            }, 5000);
    });
}



//debugging
console.log(score);