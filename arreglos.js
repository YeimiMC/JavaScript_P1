/*
Arreglos (arrays, matrices, colecciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.
*/

//Formas de declarar un array o arreglo

//1. Usando los corchetes [ ]

var miArray = [1, 2, 3, 4, 5, 6];
console.log(miArray);

//Variable sin inicializar
var colores;

//Arreglo sin asignar a una variable
["azul", "rojo", "naranja", "verde"];

//Variable colores declarada e inicializada
var colores = ["azul", "rojo", "naranja", "verde"["Verde pastel", "Amarillo pastel", "Rosa pastel"]];

//Podemos tener distintos tipos de datos en un mismo arreglo
var datosFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];

//Cada asignatura está asociada a una variable individual
var asignatura1 = "Matemáticas";
var asignatura2 = "Literatura";
var asignatura3 = "Física";

//Array
var asignaturas = ["Matemáticas", "Literatura", "Física"];

console.log(typeof(asignaturas));

//Acceso a elementos de un arrreglo
console.log("El elemento de la posición 2 de mis asignaturas es: ", asignaturas[2]);

//Si accedemos a un elemento que no existe, nos mostrará un undefined porque el espacio existe pero no tiene ningún valor
console.log("El elemento de la posición 2 de mis asignaturas es: ", asignaturas[10]);

//Mostrar la longitud de mi arreglo
console.log(asignaturas.length);


//Ejemplo de arrays
var carrito = ["pantalón", "camisa", "corbata"];

var publicacion = ["Yeimi", 137, "29-05-2023"];

//Modificar los elementos dentro del arrays
//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion[1] = 138;

console.log(publicacion);

//No teníamos un elemento en la posición (index) 4 (indefinido = 150)
publicacion[4] = 150;

//Método para agregar elementos al final de un arreglo
asignaturas.push("Biología");
console.log(asignaturas);

asignaturas.push("Inglés");
console.log(asignaturas);

//Método para eliminar el último elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);

//Método para agregar elementos al principio de un arreglo
asignaturas.unshift("Química", "Educación Física", "Artes");
console.log(asignaturas);

//Método para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);

//Cómo eliminar todo? - Esta opción es la que se me ocurre usar -
asignaturas = [];
console.log(asignaturas);


//Método para saber si mi arreglo incluye un elemento específico
let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas marías", "Mazapan"];
regalo = carritoDeWalmart.includes("Coquita");

if(regalo === true){
    console.log("Te regalo un sartén");
}

var amigos = ["Felipe","Fernanda", "Gaby", "Maara", "Mariana", "Marina"];
var mejoresAmigos; 

var publico;

if(!amigos){
    console.log("Mi meme de Bob esponja");
}

//Método para concatenar arreglos
var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marías", "Mazapan"];
var listaDeFrutasYVerduras = ["manzanas", "mangos", "toronjas", "platanos", "fresas"];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutasYVerduras);

console.log(listaDeComprasDeLaQuincena);

console.log(listaDeGolosinas , listaDeFrutasYVerduras);

//Método para buscar un elemento en un arreglo y devolver el índice de su primera aparición. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("pistaches"));

//Método para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join('\n'))
console.log(listaDeComprasDeLaQuincena.join(' \n*** '))

//Modificaciones del arreglo (push, pop, shift, unshift, splice)

//Acceso y búsqueda de elementos (indexOf, lastIndexOf, includes)

//Transformación de elementos (sort, reverse, map, forEach)

//Operaciones lógicas (every, some)

//Creación de nuevos arreglos (slice, concat, join, reverse)

/*
Splice (agregar, eliminar o reemplazar elementos en posiciones específicas)

Sintaxis del splice

array.splice(iniciamos, numeroElementosABorrar, ElementoAInsertar, ElementoAInsertar);
*/

//Splice para borrar elementos
var abedecario = ["A", "B", "C", "D", "E"]; //borrar C y D

abedecario.splice(2,2);

console.log(abedecario);

//splice para insertar elementos
abedecario.splice(2,0, "C", "D")

console.log(abedecario); //A B C D E

//Splice para reemplazar elementos del arreglo
var vocales = ["A", "E", "I", "O","U"]//Reemplazar la E I

vocales.splice(4, 0, "COMER", "COMER", "COMER"); 

console.log(vocales);
/*

/*
//Ver métodos splice, reverse, sort, toStrig

//Método para modificar un array (eliminando, reemplazando y agregando elementos)
console.log(listaDeComprasDeLaQuincena.splice(3, 1)); //Aquí borró un elemento a partir del elemento 3 que fue Mazapán

console.log(listaDeComprasDeLaQuincena.splice(3, 1, "uvas")); //Este afectará a manzanas porque ya ocupaba el elemento 3

console.log(listaDeComprasDeLaQuincena.splice(6,0, "brócoli","zanahorias")); //Aquí se agregaron dos elementos más después de la posición 6. Se debe usar cero para indicar que no se está reeemplazando ni eliminando otros elementos.

console.log(listaDeComprasDeLaQuincena);//Aquí ya aparecen todos los cambios realizados.


//Método para invertir el orden de los elementos en el array
console.log(listaDeComprasDeLaQuincena.reverse());


//Método para ordenar los elementos de un array alfabéticamente o numéricamente. Este método ordena los elementos como cadenas de texto por defecto, incluso cuando se trata de números.
console.log(listaDeComprasDeLaQuincena.sort()); //aparecen diferentes porque son dos listas pero sí están ordenadas alfabéticamente


//Método para convertir en cadena de texto lo que está dentro del array 
console.log(listaDeComprasDeLaQuincena.toString());
*/