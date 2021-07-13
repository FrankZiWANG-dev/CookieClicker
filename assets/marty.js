var Score = parseInt(document.getElementById("score").innerText);
console.log(Score);

function SingleClick() {
        Score++;
    }

document.getElementById('salty').addEventListener("click",() => {
    SingleClick();
    document.getElementById("score").innerHTML = Score;
    console.log(Score);
});
