var score = parseInt(document.getElementById("score").innerHTML);
function NormalClick() {
    score++;
    document.getElementById("score").innerHTML = score; 
}

document.getElementById('salty').onclick=function(){
    NormalClick();
}

export {score, NormalClick};