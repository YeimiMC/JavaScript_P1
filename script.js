//alert("¡Hola, soy Yeimi!");

/*
Variables

Es un elemento del cual su valor puede cambiar o vaariar dependiendo la circusntancia. Este variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que esté dentro del espacio, es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor.
Valor = Información con que llenamos el recipiente.

Declarar = Ponerle nombre a nuestro recipiente.
Inicializar = Llenar ese recipiente.
*/

recipiente = "agua";
recipiente = "café";
recipiente = "colores y lápices";
recipiente = "leche";

//usamos esta línea de código para imprimir o mostrar la información de mi recipiente

console.log(recipiente)


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

//Ejemplos de datos indefinidos
/*
respuestaDeMiCrush;
precioBoletoEstacionamiento;

console.log(respuestaDeMiCrush);
console.log(precioBoletoEstacionamiento);
*/

//Ejemplos de valores nulos
respuestaDeMiCrush = "no";
respuestaDeMiCrush = null;
respuestaDeMiCrush = "si";
console.log(respuestaDeMiCrush)

//Ejemplo con valores NaN
operacionMatematica = 0/0;
console.log(operacionMatematica);

/*TypeOf
Es una expresión que nos ayuda a saber qué tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.

*/
console.log(typeof(esAdminitrador)); //boolean
console.log(typeof(edadDeFelipe)); //number
console.log(typeof(operacionMatematica)); //number
