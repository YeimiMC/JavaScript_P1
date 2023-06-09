//JavaSript síncrono

/*
Ejermplos de tareas síncronas

-Ciclos
-Invocaciones a funciones
-Eventlistener (específicamente)
-Condicionales y todo lo que tenga que ver con toma de decisiones
-Prompts y alerts

*/

console.log("Inicia Síncrono")
function dosSync (){
    console.log("Se ejecuta la función dos");
};

function unoSync(){
    console.log("Se ejecuta la función uno");
    dosSync();
    console.log("Se ejecuta el código tres");
}

unoSync(); //De que se ejecute este depende todo lo demás. Si esta no se cumple, el resto del código no se realiza.
console.log("Fin de sincrono"); 


//JavaScript asíncrono
console.log("Inicio de asíncrono");

function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //tiempo en milisegundos
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}
unoAsync();
console.log("Fin de Asíncrono");

/*
- Funcion setTimeout
- Notificaciones de cierre de sesión en apps bancarias
- Spotify con su cola de reproducción
- Conexiones a servidor
- Cargas de APIs

*/

/*
Ya que entendemosque la asincronía nos servirá para conectarnos a un servidor, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay varios mecanismos para manejar operaciones asíncronas en JS.

    - Callbacks (llamadas de vuelta): La forma más clásica de gestionar la asincronía

    - Promises (promesas): forma moderna

    - Async/Await: forma moderna con una sintaxis más ligera
*/

/*
Qué es un callback (llamada de vuelta)

Un callback es una funcion que se pasa como un argumento a otra función. Esta función se ejecutrará después de que la otra lo haga.
Este mencanismo nos ayuda a controlar que cierto código no se ejecute antes de que el otro termine.

Para que las necesitamos?
Sabemos que JS trabakja de forma descendente, entonces habrá cosas que queramos hacer que un código ejecute después de que ocurra otra cosa, y también de forma no secuencial.


*/

function hazClick(){
    console.log("Le hiciste clic al botón");
}


const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick);


//Ejemplo de Callback
//Defino una función que toma un número y un callback(funcion) como parámetros
function dobleNumero (num, callback){
    const resultado = num * 2;//Operación común y corriente
    callback(resultado); //invocación del callback con el resultado como parámetro.
}

//Definimos una función para mostrar el resultado
function mostrarResultado (resultado){
    console.log("El resultado es: ", resultado);
}

dobleNumero (5, mostrarResultado);



