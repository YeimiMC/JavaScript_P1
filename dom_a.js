const elementoH2 = document.querySelector("div.inicio h2");
const elementoH1 = document.querySelector("div.inicio h1");

const username = "yeimimc"
const tipo = "administrador"


console.log(elementoH2)


elementoH2.textContent = "Programador"
elementoH2.textContent = "Adiós"

//Crear elemento
//Padre
const divPadre = documento.querySelector("div.inicio");

//nuevohijo
const nuevoHijo = document.createElement("h3")
nuevoHijo.textContent = "Soy un nuevo hijo"

divPadre.appendChild(nuevoHijo);