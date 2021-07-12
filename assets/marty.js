import {Score} from '/assets/script.js';

function NormalClick() {
    document.getElementById("score").innerHTML = Number(Score + 1);
}

document.getElementById('salty').addEventListener("click", () => {
    NormalClick();
})

// export {NormalClick};