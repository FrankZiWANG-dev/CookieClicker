var Score = parseInt(document.getElementById("score").innerText);
var hightscrore = 0;
var archi1 = 0;
var archi2 = 0;
var archi3 = 0;
var archi4 = 0;

function SingleClick() {
        Score++;
        if (hightscrore <= Score){
            hightscrore = Score;
            document.getElementById("score").innerHTML = Score;
        }
        if(hightscrore === 10){
            document.getElementById("achi1").innerHTML = " Your best clicks: " + hightscrore;
            alert("Good Job !")
        }
        if(hightscrore === 100){
            document.getElementById("achi2").innerHTML = " Your best clicks: " + hightscrore;
            alert("Great !")
        }
        if(hightscrore === 500){
            document.getElementById("achi3").innerHTML = " Your best clicks: " + hightscrore;
            alert("Excellent !")
        }
        if(hightscrore === 1000){
            document.getElementById("achi4").innerHTML = " Your best clicks: " + hightscrore;
            alert("OMFG !")
        }
    }

document.getElementById('salty').addEventListener("click",() => {
    SingleClick();
    document.getElementById("hightscore").innerHTML = hightscrore;

});
//Score fonction

// function check(x,y) {
//     if (Score >= x) {
//         document.getElementById(y).disabled = false;
//     }
// }