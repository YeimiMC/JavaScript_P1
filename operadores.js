/*
--- Operadores ---
Los operadores nos permiten realizar una operación en uno o varios operandos (variables o datos)

- Operadores de asignación
- Operadores de cadena
- Operadores lógicos
- Operadores de comparación
- Operadores aritméticos

Operadores de asignación (=)
Los operadores de asignación (=) se utilizan par asignarle valor a una variable. Signa un valor al operando de la izquierda basado en el valor del operador de la derecha.

*/

/* --- Operadores de asignación (=) --- */
let edadFelipe = 31;
var recipiente = "cafe";




/* 
---- Operadores de comparación (>, <, >=, <=, ==, ===, !=, !==) ----
Los operadores de comparación nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relación de sus valores

*/

/*

let number1 = 13;
let number2 = 25;
let number3 = "25";
let veinticinco = 25;

//Operador menor que
console.log("¿El valor 13 es menor que el valor 25? " + (number1 < number2));

//Operador mayor que
console.log("¿El valor 13 es menor que el valor 25? " + (number1 > number2));

//Operador mayor o igual que
console.log("¿El valor 25 es menor que el valor 25? " + (number2 >= number3));

//Operador de igualdad solo evalúa valores
console.log("¿El valor 25 es igual que el valor 25?"+ (number2 == number3));

//Operador de igualdad estricta (evalua el valor pero también evalúa el tipo de dato)
console.log("¿El valor 25 es igual que el valor 25?"+ (25 === "veinticinco"));

//Operador de desigualdad estricta normal (!=) 
console.log("¿El valor 13 no es igual al valor 25? " + (number1 != number2)); // true porque 13 no es igual al valor 25

//Operador de desigualdad estricta (!==)
console.log("¿El valor 25 no es igual al valor 25 " + (number2 !== number3)); //true porque no son estrictamente iguales, no son el mismo tipo de dato
*/



/*
---- Operadores lógicos (&& (and) , || (or), ! (not)) ---
Los operadores lógicos nos devuelven un resultado a partir de que se cumple (o no) una condición. El resultado será un valor boolean y sus operadores son lógicos o asimilables entre ellos (los podemos combinar, y, los podemos poner en un orden específico).

AND (&&)
Sirve para determinar si dos expresiones son verdaderas. 
    - Si ambas expresiones son verdaderas, el resultado es verdadero.
    - Si una de las expresiones es falsa, todo el resultado es falso.

OR (||)
Sirve para determinar su dos expresiones son falsas.
    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.

NOT (!)
Sirve para mostrar lo contrario a lo que estamos devolviendo. 

*/

/*
//Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;
afirmacion1 = (num1 > num2); //falso
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime false porque una de las dos afirmaciones es falsa por lo tanto todo es falso.

//Ejemplo con OR (||)

afirmacion3 = (num1 < num2);//verdadero
afirmacion4 = (num1 !== num2);//verdadero

console.log(afirmacion3 || afirmacion4); //true porque al menos una afirmación es verdadera

//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso
*/

//--- Ejercicio de combinación de operaciones ---

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op);

//!Cominando operaciones2
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

console.log(op2);

/*
num5 si es mayor a num2 así que es true
num 4 no es menor al num3 así que es false
como las primeras dos comparaciones no son true entonces todo es false

num1 y num2 no son estrictamente iguales así que es false pero hay un ! afectando a esa operación entonces es true
num3 y num3 si son iguales así que es false
como uno es true y el otro false toda la comparación es true

Como la primera comparación && no es igual a false, pero como una de las segundas comparaciones son tru y la comparación general de las dos menores comparaciones también tiene true entonces op = true
*/

/* --- Operadores aritméticos (+,-, *, /, %, **, --) ---
    + (suma) : suma dos o más valores numéricos
    - (resta) : resta dos o más valores numéricos
    * (multiplicación): multiplica dos o más valores numéricos
    / (división): divide dos o más valores numéricos
    % (modulo o residuo): retorna el residuo de una división
    ** (exponenciación): retorna el resultado de una potencia. Se escribe la base antes de los asteriscos, y el exponente después de los asteriscos.
    ++ (incremento): incrementa un valor de uno en uno
    -- (decremento): decrementa un valor de uno en uno
*/

let varlor1 = 55;
let valor2 = 17;

console.log("Suma: " , varlor1 + valor2);
console.log("Resta: " , varlor1 - valor2);
console.log("Multiplicacion: " , varlor1 * valor2);
console.log("Division: " , varlor1 / valor2);
console.log("Residuo: " , varlor1 % valor2); //retorna el residuo de la división
console.log("Exponente: " , varlor1 ** valor2); //El 55 se eleva a la potencia 17
console.log("Incremento: " , ++varlor1);
console.log("Incremento: " , --valor2);

console.log(varlor1); //porque ya se incrementó 1