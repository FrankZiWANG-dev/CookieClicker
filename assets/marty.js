var Score = parseInt(document.getElementById("score").textContent);

document.getElementById('salty').addEventListener("click",() => {
    console.log(Score);
    Score++;
    document.getElementById("score").innerHTML = Score;
});
//Score fonction

// function check(x,y) {
//     if (Score >= x) {
//         document.getElementById(y).disabled = false;
//     }
// }