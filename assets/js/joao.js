
var Score = 0;
//var Score = document.getElementById("score").textContent;


document.getElementById("auto-click").addEventListener("click", () =>{
        var autoclick = window.setInterval(
            function () {
                Score = Score + document.getElementById("Start").textContent;
                //debugging
                console.log(Score);
            }, 5000);
});

//debugging
console.log(Score);