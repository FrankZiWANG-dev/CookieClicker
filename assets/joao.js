
var Score = 0;
//var Score = document.getElementById("score").textContent;


document.getElementById("auto-click").addEventListener("click", () =>{
        var autoclick = window.setInterval(
            function autoClickFunction () {
                Score ++;
                //debugging
                console.log(Score);
            }, 5000);
});

var test = 100;
//debugging
console.log(Score);
export {test};