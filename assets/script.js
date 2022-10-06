let INPUT = document.getElementById("input")
let BTNEL = document.getElementById("btn")
let LISTEL = document.getElementById("list")
let counter =0;


//Detalhe para o string literals utilizado para gerar uma função anonima para cara elemento
//No momento de definir a função precisei utilizar aspas simples para que o evento onclick
//montasse a função anonima da forma correta
//
//TO-DO adicionar um botão que adiciona um marcador para itens completados 

INPUT.focus();

BTNEL.addEventListener("click", ()=> {
	counter +=1
    LISTEL.innerHTML += 
		`
		<li id="${counter}" class="itemLi">${INPUT.value}

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
		'>Remove</button> </li>
		`;
    INPUT.value = "";
	INPUT.focus();
		

});

//Adicionado a funcionalidade de adicionar o evento pressionando a telca "Enter"
//

INPUT.addEventListener("keypress", (event)=>{
	if (event.key === "Enter") {
		event.preventDefault();
		BTNEL.click();
	}
});
