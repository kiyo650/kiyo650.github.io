'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function goGators() {
    let numberGators = document.getElementById("number");
    let result = "";
    for (let i = 0; i < numberGators.value; i++) {
        const p1 = document.createElement("p");
        const gator = document.createTextNode("🐊");
        p1.appendChild(gator);
        div1.appendChild(p1);
    }
    return result
}
const go = document.getElementById("go");
go.addEventListener("click", goGators);


function homeGators() {
    const div1 = document.getElementById("div1");
    if (div1.hasChildNodes()){
        div1.removeChild(div1.firstChild);
    }
}
const home = document.getElementById("home");
home.addEventListener("click", homeGators);
