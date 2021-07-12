var score = parseInt(document.getElementById("score").innerHTML);
function NormalClick() {
    score++;
    document.getElementById("score").innerHTML = score;
    console.log("Marty score = " + score);
    return score;
}

document.getElementById('salty').onclick=function(){
    NormalClick();
}

//debugging
console.log("Marty score = " + score);

export {score, NormalClick};