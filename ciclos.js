/* Bucles e iteracion

En JS, un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas. 


-While (mientras)
-Do While (hacer mientras)
-For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuela FALSE.

//Estructura basica de una While

/* while(tenerSuenio && tenerUnaCamita){
    /bloque de codigo 
    /hacer la dormicion
}

Ejemplo

let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }

}

dejaloComprar();

*/


/* 
Casos de uso del ciclo While

- Para verificar si un usuario está registrado o no
- Verificamos la disponibilidad de un producto (stock)
- Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar información, etc.) 
- Recorrer publicaciones de un usuario
- Contador de likes
- Seguimiento de seguidores


*/

/*
let Felipe = "listaDeAmigos";
let Fernanda = "bloqueada";

while (listaDeAmigos){
    console.log("Mostrar publicación");
}

*/
//Codigo de mi sopita de verduritas con pollito

//Declaro e inicializo un array con mis ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"]; //6 elementos

//Decalaramos una variable llamada contador inicializada en 0 para usarla como un contador. 
var ingredientesAgregadosALaOlla = 0;


//mientras los ingredientes agregados a la olla sean menos que los ingredientes que me quedan disponibles...
while (ingredientesAgregadosALaOlla < ingredientes.length) {
    //... ire agregando ingredientes a la olla...
    console.log("Agregando " + ingredientes[ingredientesAgregadosALaOlla] + " a la olla");

    //... voy aumentando el contador para saber cuando parar    
    ingredientesAgregadosALaOlla++;
}

console.log("La sopita ya está lista, yumi");


function imprimirAsteriscos(){
    console.log("******************************");
}

/*
Do while (hacer mientras)

Es similar al while, con la diferencia de que la condición se evalúa después de cada iteración. Esto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condicion inicial es falsa.

do {
    //bloque de codigo que vamos a ejecutar
} while (condicion);


*/

console.log("Ejemplo de Galletitas con Do-While")

//Variable tiempo de cocción que servirá como contador
var tiempoTranscurridoDeCocción = 0;

//Usamos el ciclo do-while
do{
    console.log("Horneado la galletas...")
    tiempoTranscurridoDeCocción +=5;

//Todo el bloque de código se va a evaluar mientras el tiempo de cocción sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20, o 25 minutos, teniendo un máximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen.

//Esto es como si revisaramos el horno cada 5 minutos

} while (tiempoTranscurridoDeCocción <30);

console.log("Las galletas están listas");

/* For (para)
Se utiliza cuando se conoce el número exacto de iteraciones que se realizaran. Consiste en tres partes: inicialización, condición y expresión final.
El bloque de código que ejecuta mientras la condición sea verdadera, y después de cada iteración se ejecuta la expresión final.

for (inicialización; condición; expresión de iteración){
    //Bloque de código a ejecutar
}

 - inicialización: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condición: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresión de iteración: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.

*/

/*
imprimirAsteriscos(i);
console.log("Ejemplo de la pizza con For");

var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];

var tiemposPorPaso = [15, 10, 20];

//En el ciclo for, para cada paso, se tiene tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuántos pasos me quedan pendientes. Como ya no haya pasos, terminó el proceso.

for(var tiempo = 0; tiempo < pasosDeReceta.length; paso++){
    console.log("Realizando paso " + pasosDeReceta[i]);
    console.log("Esperando " +  tiemposPorPaso[i] + " minutos");

}

console.log("Disfruta tu piza");

*/

//Ejemplo contador FOR (contador de cohetes)
for (let i = 0; i>10; i--){
    console.log("Faltan " + i + " segundos para el despegue");
}

//Ejemplos de for para cupones de descuento

for(let cupones = 10; cupones>0; cupones --){
    console.log("Tienes un cupón de descuento." + " Nos quedan " + (cupones -1) + " diponibles");
}

console.log("Ya no hay cupones disponibles.")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");



