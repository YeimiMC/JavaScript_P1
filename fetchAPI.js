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




function hazClick(){
    console.log("Le hiciste clic al botón");
}


const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick);
*/

/*


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
*/

/*
Promises(promesas)

Son otro mecanismo para manejar la asincronía. Utilizar promesas hace que el código sea más legible y práctico que el usar callbacks, y como su nombre lo indica una promesa es alo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejar los callbacks.

promise.then

promise.catch

Las promesas tienen estados:

- Pendiente (pending): El estado inicial de nuestra promesa, aquí aún no tenemos resultados

- fullfilled: Cuando la operación asincrona se completa con éxito (resolve).

- Rejected (rechazo): Cuando la operación falla (reject)

También las promesas, al ser un objeto, tienen métodos
-then(function resolve): Ejecuta un callbak llamado resolve cuando la promesa se cumple.

- catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.


- then (resolve, reject): Puedo ejecutar las dos funciones en el mismo método then.


*/
//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos() {
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function (resolve, reject) { //el objeto maneja dos funciones (resuelto, rechazo)
        fetch('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
            .then(function (response) { //espero respuestas...
                if (response.ok) { //propiedad booleana (si o no hay respuesta)
                    return response.json();//metodo para convertir la respuesta a un objeto .json
                } else { //si no...
                    throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
                }
            })
            .then(function (data) { //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
                resolve(data);
            })
            .catch(function (error) { //Si no hay una respuesta, resulvo con un rechazo.
                reject(error);
            });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error);
    });



 /* Ejemplo de la PokeAPI

    Necesito

        - URL
        - Promesa (Con dos posibles caminos rechazo y resolución)
            - si no se resuelve me traigo los datos de la API
            - si no, muestro un error

*/

//Primer bloque para la conexión del servidor
const obtenerPokemon = new Promise((resolve, reject)=>{
    fetch('http://pokeapi.co/api/v2/pokemon/ditto') //me conecto y busco

    .then(respuesta =>{ //cuando se conecte
        if(respuesta.ok){ //si la conexión es ok
            return respuesta.json(); //guardo el dato en .jsom
        } else { //si no me conecto...
            throw new Error ("Error 404"); //muestro un error
        }
    })

    //segundo bloque (cuando ya me conecté al servidor)
    .then(datos =>{ //entonces esos datos...
       resolve(datos); // Se usan como parámetro de mi resolución (le estoy pasando esos datos que yo ya guardé)
    })

    //tercer bloque (solo en caso de que no se encuentre información)
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    });
    
});

//Ya que le di el mensaje a mi mesero (creación de promesa), ahora voy a poder motrar la información si la promesa se resuelve (encuentra la info), os si se rechaza (no encuentra la info)

obtenerPokemon

.then(pokemon =>{ //el valor pokemon = datos del servidor en .json
    console.log("Pokemon obtenido", pokemon.name);
})
.catch(error => {
    console.log(error);
});

/*
Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexiion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/

//Realizamos la petición al servidor
fetch('http://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta => { //cuando la promesa se resuelve, ejecutamos esta función
        return pokeRespuesta.json(); //esta función retorna la pokeRespuesta en un .json
    })

    .then(PokeInfo => { //cuando la promesa de la conexión se resuelve, entonces ejecutamos esta función. Esta otra función guarda la información de la respuesta, y lo guarda en una nueva variable llamada pokeInfo.
        console.log("El nombre del pokemón es: ", pokeInfo.name, " su número de la pokedex es: ", pokeInfo.id);
        console.log(pokeInfo);
    })

    .catch(pokeError => {
        console.log("No encontramos nada de información ", + pokeError);
    });


const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.querySelector("#pokemonContainer");

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevernir que el navegador se actualice
    traerPokemon(input.value); //ejectua la función traerPokemon
})


//Manipulacion del DOM + Fetch API
function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

        //guardo la respuesta en .json
        .then(respuesta => respuesta.json()) //Se resuelve la promesa

        //ese .json lo asigno a una variable llamda datos, que usare para alimentar una funcion llamada crearPokemon
        .then((datos) => {
            crearPokemon(datos);
        });
}

function crearPokemon(nombrePokemon) {
    const pokeImg = document.createElement("img"); //creo una etiqueta img
    pokeImg.src = nombrePokemon.sprites.front_default; //front_default es el nombre de la propiedad donde esta la imagen de mi pokemon
    const h2 = document.createElement("h2"); //creo una etiqueta h2
    h2.innerHTML = nombrePokemon.name; //le pongo el nombre del pokemon a ese h2
    const pokeDiv = document.createElement("div"); //crearmos un div para poner mi pokemon
    //Inserto los elementos imagen y h2 a un div particular de cada pokemon
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);
    //inserto ese div particular en un div general que estan en el html
    pokemonContainer.appendChild(pokeDiv);

}




//backticks ``