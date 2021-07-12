var score = parseInt(document.getElementById("score").innerHTML);

document.getElementById('salty').onclick=function(){
    score++;
    document.getElementById("score").innerHTML = score; 
}

export {score};