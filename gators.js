'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function goGators() {
    let numberGators = document.getElementById("number");
    let result = "";
    for (let i = 0; i < numberGators.value; i++) {
        const newDiv = document.createElement("div");
        const gator = document.createTextNode("🐊");
        newDiv.appendChild(gator);
        const currentDiv = document.getElementById("gator");
        document.body.insertBefore(newDiv, currentDiv)
    }
    return result
}
const go = document.getElementById("go");
go.addEventListener("click", goGators)

function homeGators() {
    let result = document.newDiv
    return result.innerText = ""
}
const home = document.getElementById("home");
home.addEventListener("click", homeGators)
