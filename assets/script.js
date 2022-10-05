let INPUT = document.getElementById("input")
let BTNEL = document.getElementById("btn")
let LISTEL = document.getElementById("list")

BTNEL.addEventListener("click", ()=> {
        LISTEL.innerHTML += `<li> ${INPUT.textContent} </li>`;
        INPUT.innerText = null;
})