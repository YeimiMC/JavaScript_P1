console.log("Ejercicio de númros primos");

/* Requerimientos:
En un archivo nuevo ejercicioCiclos.js
Tiempo: 25 minutos
Utilizar ciclos
Cuando detecte que el número que estamos utilizando no es primo, que se detenga el ciclo.

Expresiones de comparación, usar operadores, residuo o modulo

Ejercicio: Escribir un programa que pida al usuario un número entenro y muestra por pantalla si es un número primo o no.
*/

/*
//--- Primer ejemplo de resolución ---
//Solicitaremos al usuario que coloque un número enterro
var numero = parseInt(prompt("Ingresa aquí un número entero:"));

var esUnNumeroPrimo = true; //Para establecer la variable inicial como true


//Aquí verificamos si el número es menor o igual a 1
if (numero <= 1) {

    esUnNumeroPrimo = false; //Si es menor o igual a 1, no es primo

} else {
    //Aquí vamos a comprobar si el número es divisible por algún número entre 2 y menos 1

    for (var i = 2; i < numero; i++) {  
        //Aquí se establece  una variable i con un valor inicial de 2. El bucle se ejecutará siempre que i sea menor que numero, y en cada iteración, i se incrementará en 1.

        if (numero % i === 0){ 
            //Aquí se verifica si numero es divisible por i sin dejar residuo. El operador % calcula el residuo de la división. Si el residuo es 0, significa que numero es divisible por i. 
        
            esUnNumeroPrimo = false; //Porque si el número es divisible por i entonces no es primo.

            break; //break, lo usamos para salir del bucle para que deje de continuar comprobando. 
        }

    }
}


//Vamos a mostrar el resultado 
if (esUnNumeroPrimo){
    console.log("El " + numero + " sí es un número primo.");
} else {
    console.log("El " + numero + " no es un número primo.")
}

*/

//- - - Resolución de instructor Felipe - - -

//Escribe un programa que pida al usuario un número entenro y muestra por pantalla si es un número primo o no.

//¿Qué es un número primo? Es una número mayor que 1, que sólo se puede dividir entre 1 y entre sí mismo.


//Ejemplos de número primos: 2, 3, 5, 7, 11, 13, 17, 19, etc.

//Operaciones: División, comparación, residuo

//1.Le pido el dato al usuario
var numeroIngresaado = prompt("Ingresa un número entero");

//2.Evalúamos los dos posibles escenarios: sea o no primo (estado inicial de mis números)
let esNumeroPrimo = true;

//3.Operación para demostrar si es o no es primo
if(numeroIngresaado <=1){
    esNumeroPrimo = false; //demuestro que no es primo, y cambio el estado inicial a false
} else {
    let divisor = 2;
    while(divisor <= numeroIngresaado /2 && esNumeroPrimo){ 
        //aquí el uso la palabra divisor a diferencia de i 

        //Para cuando es primo porque después de la mitad de los números de un número ya no hay divisible para ese número.

        if(numeroIngresaado % divisor === 0){ 
            esNumeroPrimo = false; //En esta parte se verifica si numeroIngresado es divisible por 2(divisor) sin dejar residuo. El operador % calcula el residuo de la división. Y si el residuo es 0, significa que el numeroIngresado es divisible por 2 (divisor).
        }

        //
        divisor ++;
        
    }
}

/* Nota de while
1. Si el número es mayor que 2, entra en el else. Inicializamos la variable 1 en 2, que representa el primer posible divisor.

*/

//Mostramos los resultados

if(esNumeroPrimo){ //en caso de que el número ingresado mantenga el estado inicial
    console.log(numeroIngresaado + " es un número primo.")

} else{ //en caso de que el estado inicial haya cambiado a false
   console.log(numeroIngresaado + " no es un número primo.")

}