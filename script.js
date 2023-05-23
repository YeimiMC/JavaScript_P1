//alert("¡Hola, soy Yeimi!");

/*
Variables

Es un elemento del cual su valor puede cambiar o vaariar dependiendo la circusntancia. Este variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que esté dentro del espacio, es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor.
Valor = Información con que llenamos el recipiente.

Declarar = Ponerle nombre a nuestro recipiente.
Inicializar = Llenar ese recipiente.
*/

var recipiente = "agua";
var recipiente = "café";
var recipiente = "colores y lápices";
var recipiente = "leche";

//usamos esta línea de código para imprimir o mostrar la información de mi recipiente

console.log(recipiente);


//Declarar vs inicializar

/*
quieresSerMiNovia;
edad;
altura;
personalbar;
genero;
*/

/* 
Tipos de datos (primitivos y no primitivos)

- String: Sirve para agregar valores en forma de texto. Para que se considere así, el valor debe estar dentro de comillas simples (' '), dobles("") y backticks(´´)

- Number: Sirve para agregar valores en formato numérico (para poder usarlos en operaciones aritméticas). Estos valores no usan comillas.

- Boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, si y no).

- Undefined: Sirve para representarr un tipo de dato que no tiene valor. Cuando declaramos vriables sin inicializar, tendremos datos del tipo undefinied.

- Null: Sirve para definir que un valor es nulo.

- NaN (Not at Number): sirve para representar un valor que no es un número o con una operación que no es posible.

- Symbol 

- Object (no es primitivo)

*/

// Ejemplo para la concatenación

/*
apodoDeFelipe = 'El "amante número uno" de los chilaquiles verdes';
console.log(apodoDeFelipe);

//Ejemplos de valores numéricos
edadDeFelipe = 31;
costoDeUnGansito = 18.50; 
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//Ejemplos de valores booleanos
esAdminitrador = true;
contraseñaCorrecta = false;
cuentaPremium = false;
*/
var edadDeFelipe = 31;

//Ejemplos de datos indefinidos
/*
respuestaDeMiCrush;
precioBoletoEstacionamiento;

console.log(respuestaDeMiCrush);
console.log(precioBoletoEstacionamiento);
*/

//Ejemplos de valores nulos
/*
respuestaDeMiCrush = "no";
respuestaDeMiCrush = null;
respuestaDeMiCrush = "si";
console.log(respuestaDeMiCrush)

//Ejemplo con valores NaN
operacionMatematica = 0/0;
console.log(operacionMatematica);
*/

/*TypeOf
Es una expresión que nos ayuda a saber qué tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.

*/

/*
console.log(typeof(esAdminitrador)); //boolean
console.log(typeof(edadDeFelipe)); //number
console.log(typeof(operacionMatematica)); //number

console.log(typeof(false)); //boolean
*/

/*Tipos de variables

En JS tenemos 3 tips principales de variables:

    - var: Era la forma principal de declarar las variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable está disponible en todo el programa.

    - let: lo usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de código o expresión (meter a la mamá de bambi en una cajita).

    - const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia).

*/

//En este caso, la mamá de Bambi está visible desde cualquier lugar del programa


var mamaDeBambiViva = false;

var cazador = "listo para disparar";

var nombre = "Yeimi Magadan";

const pi = 3.1416;

const descuentoDeMiEcommerce = 10;


/*
Funciones (function):
Una funcion es una agrupación de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parámetros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.

Parámetros = variables que necesitamos para alimentar mi función (todas las variables se tienen que utilizar).
Ejemplo: limón, azúcar, vaso, cuchara, hielos, agua.

nombro para la función = Con el nombre, nosotros vamos a poder activar o invocar la función (básicamente tenemos que llamarla para que funcione).
Ejemplo: prepararAguitaDeLimon

Operacines: Conjunto de instrucciones (en orden específico).
Ejemplo: 1) Cortar limón, 2) Exprimir limón, etc.

Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limón.

*/

//1.- Creamos la funcion con la palabra reservada function y le ponemos un nombre. Después, abrimos y cerramos paréntesis y abrimos y cerramos llaves {}. Los paréntesis son pare nuestos parámetros o argumentos, y las llaves para delimitar el bloque o la función.

//2.- Ponemos nuestros parámetros (variables) dentro de los paréntesis

//3.- Poner las instrucciones dentro de las llaves, utiliozando los parámetros o argumentos.

//4.- Invocar la función escribiendo su nombre y abrimos y cerramos paréntesis.



function prepararAguitaDeLimon(limon, azucar, vaso, cuchara, hielos, agua){

    var limon = "limon";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";
    var hielos = "hielos";
    var agua = "agua";
    
    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("Agregamos el agua al vaso " + agua);
    console.log("Endulzamos al gusto " + azucar);
    console.log("Mezclamos " + cuchara);
    console.log("Agregamos los hielos al vaso " + hielos);
    console.log("Disfrutar");

    var cuchara = "tenedor";
    console.log(cuchara)
}

//console.log(cuchara);

prepararAguitaDeLimon();
console.log(recipiente);

//Ejemplo de las 3 formas de agregar parámetros o funciones

//Primera forma: Usando parámetros dentro de paréntesis

function suma(a, b){ //valores están en undefined
    
    var a = 5; //cambio el undefined por 5
    var b = 7; //cambio el undefined por el 7

    operacion = a + b; // hago mi suma utilizando los dos valores
    console.log(operacion); //imprimir mi operación

}
suma(); //invocamos función

//Segunda forma: Usando los valores dentro del paréntesis
function resta (a=8, b=5){

    operacion = a - b;

    console.log(operacion);
}
resta();

//Tercera forma: Inicializando valores dentro de la invocación
function multiplicacion (a, b){
    operacion = a * b;
    console.log(operacion);

    suma();
}
multiplicacion(3,9);
multiplicacion(11,8);
multiplicacion(1,33);
multiplicacion(3,9);
multiplicacion(6,0);
multiplicacion(4,pi);
multiplicacion(2,edadDeFelipe);
multiplicacion(30,); //Se imprime NaN porque nos falta un parámetro


// Funciones anonimas

let funcionAnonima = function divison (a, b,){
    operacion = a / b;
    console.log(operacion);
}
funcionAnonima(10,5);

/*Return
La sentencia return finaliza la ejecución de la función, y especifica un valor para ser devuelto a quien llama a la funcion. O lo que es lo mismo, usamos return para finalizar y también para poder asignar el resultado a una variable.

*/

//Funcion ára dar un saludo personalizado
//Primero defino mi funcion
function saludo() {
    
    //declaro e inicializo mi valor del nombre
    let nombreSaludo = "Yeimi";
    let apellidoSaludo = "Magadan";
    
    //Uso ese nombre para personalizar mi saludo
    console.log("¡Saludos " + nombreSaludo + " " + apellidoSaludo + "! Qué bueno que usas nuestra aplicación.");

    //Finalizo la ejecucíón de mi funcion, y tomo el dato de la variable llamada nombreSaludo para poder usarla después en otras operaciones
    return nombreSaludo + " " + apellidoSaludo; //limbo de las variables
}

//Para poder usar esa variable que hasta este momento sacamos de la funcion, pero que no sabemos dónde está (porque está en el limbo de las funciones). Y en esta nueva variable ponemos la invocación de la funcion.

const nombreQueSaqueDeMiFuncion = saludo();

console.log("Estas son las personas que han iniciado sesión en mi aplicación: " + nombreQueSaqueDeMiFuncion);

var nombreIngresadoDesdeElNavegador = prompt("Introduce tu nombre");
console.log("Gracias por entrar a mi página " + nombreIngresadoDesdeElNavegador);