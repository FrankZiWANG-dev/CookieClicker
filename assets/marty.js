import {Score} from '/assets/script.js';

function NormalClick() {
    document.getElementById("score").innerHTML = Score++;
}

document.getElementById('salty').onclick=function(){
    NormalClick();
}

export {NormalClick};