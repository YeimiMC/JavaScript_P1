// 1. Traer o referenciar todos los elementos del HTML y los vamos a guardar en variables para poder utilizar después

//Métodos de selección

let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar");
let botonDecrementar = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");


//Declarar variable con un estado inicial
var valorContador = 0;

//Lógica de negocio

function incrementar(){
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if(valorContador ===10){ //Si el contador llega a 10 se imprime mostrar imagen
        mostrarImagen();
    }

}


function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador;
}

function resetear(){
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
}

//función para mostrar la imagen
// La intención de esta funcion es que cuando sea invocado, recorra el arreglo y tome uno de los elementos de forma aleatoria (index)
function mostrarImagen(){
    var coleccionImagenes = ["./img/meme1.jpg", "./img/meme2.jpg", "./img/meme3.jpg", "./img/meme4.jpg", "./img/meme5.jpg"];
    
    let indexRandom = Math.floor(Math.random()* coleccionImagenes.length);
    //Math.floor para redondear enteros anteiores 
    //Math.random Colocar un número aleatorio
    //(Math.round se usa para redondear hacia el entero más cercano)

    //Obterner la URL o dirección de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrego la URL al atributo src que deje vacío en el HTML
    memeRandom.src = urlAleatoria;

    //Cambio la propiedad de visualización (display) a un block
    memeRandom.style.display = "block";

}

botonIncrementar.addEventListener("click", incrementar);
botonDecrementar.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);

