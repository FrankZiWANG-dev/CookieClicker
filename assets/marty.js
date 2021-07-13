var Score = 0;
console.log(Score);

function SingleClick() {
        Score++;
    }

document.getElementById('salty').addEventListener("click",() => {
    SingleClick();
    document.getElementById("score").innerHTML = Score;
    console.log(Score);
});

function check(price, bonus) {
    if (Score >= price) {
        document.getElementById(bonus).disabled = false;
    }
}
