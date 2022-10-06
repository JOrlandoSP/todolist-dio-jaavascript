let INPUT = document.getElementById("input")
let BTNEL = document.getElementById("btn")
let LISTEL = document.getElementById("list")
let counter =0;


//Detalhe para o string literals utilizado para gerar uma função anonima para cara elemento
//No momento de definir a função precisei utilizar aspas simples para que o evento onclick
//montasse a função anonima da forma correta
//
//TO-DO adicionar um botão que adiciona um marcador para itens completados 

BTNEL.addEventListener("click", ()=> {
	counter +=1
    LISTEL.innerHTML += 
		`
		<li id="${counter}" class="itemLi">${INPUT.value} <button id="${counter}" 
		onclick='
		(function(){ document.getElementById("${counter}").remove(); })();
		'>Remove</button> </li>
		`;
    INPUT.innerText = null;
		

})

