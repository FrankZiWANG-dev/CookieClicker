import {Score} from "script.js";


let priceAutoClick = 100;
const buttonAutoClick = document.getElementById("auto-click");


if((document.getElementById("auto-click").clicked == true) && (priceAutoClick === Number(Score))) {
    buttonAutoClick.disabled = false;
    Score = Score - priceAutoClick;
    document.getElementById("auto-click").addEventListener("click", () =>{
        var autoclick = window.setInterval(
            function autoClickFunction () {
                Score ++;
                //debugging
                console.log(Score);
            }, 5000);
});
} else {
    buttonAutoClick.disabled = true;
}


//debugging
console.log(Score);