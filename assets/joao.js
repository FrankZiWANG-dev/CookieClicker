//import {Score} from "/assets/marty.js";
let priceAutoClick = 10;
let valueAddedAutoClick = 1;
let autoClickX0 = true;
let autoClickX1 = false;
let autoClickX25 = false;
let autoClickX50 = false;
let autoClickX100 = false;
let interval = null;  


//document.getElementById("auto-click").value = "Auto-Click x1";

const buttonAutoClick = document.getElementById("auto-click");
buttonAutoClick.disabled = true;

//debugging
window.setInterval(function () {console.log("Joao 1st Score is = " + Score);}, 5000);

window.setInterval(function() {
    if ((autoClickX0) && (Score > 9)) {
        functionAutoClickX1();
        document.getElementById("score").innerHTML = Score;
        autoClickX0 = false;
        autoClickX1 = true;
        window.setInterval(function () {console.log("Joao function clickx1 Score is = " + Score);}, 3000);

    } else if ((autoClickX1) && (Score > 99)) {
        priceAutoClick = 100;
        functionAutoClickX25();
        document.getElementById("score").innerHTML = Score;
        autoClickX1 = false;
        autoClickX25 = true;
        window.setInterval(function () {console.log("Joao function clickx25 Score is = " + Score);}, 3000);

    } else if ((autoClickX25) && (Score > 499)) {
        priceAutoClick = 500;
        functionAutoClickX50();
        document.getElementById("score").innerHTML = Score;
        autoClickX25 = false;
        autoClickX50 = true;
        window.setInterval(function () {console.log("Joao function clickx50 Score is = " + Score);}, 3000);

    } else if ((autoClickX50) && (Score > 4999)) {
        priceAutoClick = 5000;
        functionAutoClickX100();
        document.getElementById("score").innerHTML = Score;
        autoClickX50 = false;
        autoClickX100 = false;
        window.setInterval(function () {console.log("Joao function clickx100 Score is = " + Score);}, 3000);
    }
},100);

  

//let autoClicker = setInterval(autoClickFunction, 3000);

function autoClickFunction() {
    Score += valueAddedAutoClick;
    document.getElementById("score").innerHTML = Score;
    //debugging
    console.log("Joao Score auto-click is = " + Score);
}

function startStuff() {
    interval = setInterval(autoClickFunction, 3000);
}

function stopStuff() {
    clearInterval(interval);
}

//debugging
window.setInterval(function () {console.log("Joao disable Score  is = " + Score);}, 5000);


function functionAutoClickX1() {
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{       
        Score -= priceAutoClick;
        startStuff();
        buttonAutoClick.disabled = true;
        //document.getElementById("auto-click").value = "Auto-Click x25";
        document.querySelector('#auto-click').innerText = "Auto-Click x25";
        //window.setInterval(function () {console.log("Joao disable Score 2  is = " + Score);}, 5000);
    });
}

function functionAutoClickX25() {
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{
        //window.clearInterval(autoClickVar);
        Score -= priceAutoClick;
        stopStuff();
        valueAddedAutoClick = 25;
        startStuff();
        buttonAutoClick.disabled = true;
        //document.getElementById("auto-click").value = "Auto-Click x50";
        document.querySelector('#auto-click').innerText = "Auto-Click x50";
    });
} 

function functionAutoClickX50()  {
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{
        //window.clearInterval(autoClickVar);
        Score -= priceAutoClick;
        stopStuff();
        valueAddedAutoClick = 50;
        startStuff();
        buttonAutoClick.disabled = true;
        document.querySelector('#auto-click').innerText = "Auto-Click x100";
    });
} 

function functionAutoClickX100() {
    buttonAutoClick.disabled = false;
    document.getElementById("auto-click").addEventListener("click", () =>{
        //window.clearInterval(autoClickVar);
        Score -= priceAutoClick;
        stopStuff();
        valueAddedAutoClick = 100;
        startStuff();
        buttonAutoClick.disabled = true;
        autoClickX100 = true;
        document.querySelector('#auto-click').innerText = "Auto-Click Max";
    });
}

//debugging
window.setInterval(function () {console.log("final " + Score);}, 5000);



//debugging
console.log("Joao final Score is = " + Score);

function check(x,y) {
    if (Score >= x) {
        document.getElementById(y).disabled = false;
    }
}
