let INPUT = document.getElementById("input")
let BTNEL = document.getElementById("btn")
let LISTEL = document.getElementById("list")
let counter =0;


//Detalhe para o string literals utilizado para gerar uma função anonima para cara elemento
//No momento de definir a função precisei utilizar aspas simples para que o evento onclick
//monte a função anonima da forma correta detro do "li" criado

INPUT.focus();

BTNEL.addEventListener("click", ()=> {
	if (INPUT.value === ""){
	alert("Insert a task to add into the list")
	} else {
		counter +=1
		LISTEL.innerHTML += 
		`
			<li id="${counter}" class="itemLi">
			<button class="done"
			onclick='
			(function(){document.getElementById("${counter}").style.backgroundColor = "red"; })();
			'>Done</button>
		
			<button class="undone"
			onclick='
			(function(){document.getElementById("${counter}").style.backgroundColor = "white"; })();
			'>Undone</button>

			<button class="delete "id="${counter}" 
			onclick='
			(function(){ document.getElementById("${counter}").remove(); })();
			'>Remove</button> 

			${INPUT.value} </li>
			`;
		INPUT.value = "";
		INPUT.focus();
			}
	});

//Adicionado a funcionalidade de adicionar o evento pressionando a telca "Enter"
//

INPUT.addEventListener("keypress", (event)=>{
	if (event.key === "Enter") {
		event.preventDefault();
		BTNEL.click();
	}
});
