'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function gator(){
//   let element = document.getElementById("number")
//   let result = ""
//   for (let i = 0; i < element.value; i++){
//     const happen = document.createElement('p');
//     happen.textContent = "🐊";
//     document.body.append(happen);
//   }
//   return result
// }

function happenGators(){
    let numberGators = document.getElementById("number");
    let result ="";
    for (let i = 0; i < numberGators.value; i++){
    const newDiv = document.createElement("div");
    const gator = document.createTextNode("🐊");
    newDiv.appendChild(gator);
    const currentDiv = document.getElementById("gator");
    document.body.insertBefore(newDiv, currentDiv)
    }
    return result
}

const target = document.getElementById("target");
target.addEventListener("click", happenGators)