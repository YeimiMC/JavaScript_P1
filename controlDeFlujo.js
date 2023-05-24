/*
Control de flujo
Cuando hablamos de flujo de control hablamos del orden en que ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a emnos que el flujo de control se vea modificado por una instrucción de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales
Son estructuras o condiciones que nos permiten modificar el orden natural de ejecución de nuestro programa. Son sentencias específicas que nos ayudara a decidir si una condición se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

Ejemplo
Tengo limpia mi playera de la suerte? //pregunta o instrucción que detona la condición
true: Entonces voy a la fiesta // respuesta con su posible instrucción
false: Entonces me quedo a dormir // respuesta con su posible instrucción

//Condicional if (si)

if (condicion){
    //Ejecuto este bloque de código
}

*/

//Mariana tiene 17 años y quiere ir a una fiesta. Dicha fiesta sólo es para personas adultas (mayores de 18 años). Ayuda a Mariana a decidir si puede ir a la fiesta o no.

//Evaluamos solo una expresión (si Mariana tiene menos de 18 años), en caso de que sea verdadero, mostramos el mensaje dentro del bloque. Si es falso, no mostrará nada porque nuestro programa no está preparado para esa situación (incertidumbre).

/*
let edadMariana = 17; // Debemos tomar en cuenta primero la edad de Felipe
let edadPermitida = 18;
if (edadMariana < 18){
    console.log("Lo siento Mariana, no puedes ir a la fiesta");

}
*/

/*
Else (de otro modo - sí no)
Utilizamos esta instrucción o sentencia para especificar que un bloque de código se ejecuta en caso de que la condición sea falsa.

Estructura básica del Else:

if(condicion){
    //Este bloque se ejecuta si la condición es verdadera
} else{
    //Este bloque se ejecuta si la condición es falsa
}

*/

let edadAxel = prompt("Ingresa tu edad");
let edadParaEntrarALaFiesta = 18;

if (edadAxel < edadParaEntrarALaFiesta){ //verdadero
    //Se ejecuta cuando es verdadero (que Axel es menor a la edad permitida)
    console.log("Lo siento, no puedes entrar a la fiesta");
    function registrarUsuario();
} else{
    //Se ejecuta cuando es falso (que Axel es mayor a la edad permitida)
    console.log ("Felicidades, tienes la edad permitida para enrar a la fiesta");
    permitirCompra();
}

/* Test de nuestro programa (valores que también se evaluan como falsos)
    - "false" (String)
    -  Nan
    - fals (boolean dispara verdadero)
*/