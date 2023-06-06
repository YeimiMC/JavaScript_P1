
/*DOM (Document Object Model)

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elementos del DOM

Todos los elementos del DOM se consideran nodos.

- Document (Este es el nodo raíz)
- Element (todas las etiquetas HTML)
- Texto (textos que están dentro de las etiquetas)
- Atributo (todos los atributos que pueden llegar a tener las etiquetas)
- Comentario (Todos los comentarios del documento)

Comunicación entre HTML y JS

Métodos de selección de elementos

Son elementos que nos van a permitir seleccionar uno o varios elementos o grupos de ellos del DOM. Estos métodos se utilizan en el documento, por eso se agrega un document.getElement

//getElementByID: Busca elementos por su id
//getElementsByClassName: Busca
//getElementByTagName


*/

let parrafo = document.getElementById("parrafo1");

parrafo.style.color = "green";
parrafo.innerHTML= "Hola Yeimi, bienvenida. Puedes comprar :D";

console.log(parrafo);

//Traer elementos con getElementsByClassName
var parrafitos = document.getElementsByClassName("parrafos");
//parrafitos.style.color = "red";

console.log(parrafitos); //Info HTML Collection

var parrafosEtiqueta = document.getElementsByTagName("p");
//console.log(parrafosEtiqueta);

//Métodos más actuales
var parrafoQuerySelector = document.querySelector("parrafo1");
var parrafoQuerySelectorAll = document.querySelectorAll(".parrafos");


console.log(parrafoQuerySelectorAll); //Te trae la lista de nodos con la característica que seleccionaste.

//Buscar querySelector del DOM 

/* querySelector
Es un método que se utiliza para seleccionar elementos de el documento HTML utilizando selectores CSS.

sintáxis básica:

elemento.querySelector(selector)
- "elemento" es el elemento del DOM en el que se desea buscar
- "selector" es una cadena de texto que representa el selector CSS que se utilizará para seleccionar los elementos deseados.


NOTA: El método querySelectir devuelve el primer elemento que coincide con el selector específicado. Si no se encuentra ningún elemento, devuelve "null"

Cuando se desea seleccionar múltiples elementos que coinciden con un selectir, podemos usar el método querySelectorAll  el cual devolverá una lista (NodeList) de todos los elementos que coinciden con el selector dado.

*/ 
/* Eventos (acción y reacción)

Los eventos son una forma mucho más facil de modificar o alterar el contenido de un elemento.  Los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS

*/

//Evento HTML
//Creo una función llamada cambiaColor donde yo paso a un color como parámetro (red, blue, black)
function cambiaColor(color){

    //Con ese color que paso como parámetro, se lo aplico a un elemento en específico.
    parrafo1.style.color = color;

}

/*Evento con EventListener
Permite escuchar al evento indicado (primero parámetro) y en el caso de que ocurra (escuche), se ejecuta la función asociada (segundo parámetro)

Sintaxis

object.addEventListener(nombreDelEvento, funcionQueSeDispara)

*/

//Referecias boton
/*const botonCambiarColor = document.querySelector("#botonCambiarColor");
botonCambiarColor.addEventListener("click", function(){

    alert("Hola, has presionado el botón para cambiar color");

})
*/


/* Elementos para crear y agregar elementos
1 Se creaan
2 Se agregan

Sintaxis para crear elementos
elementoPadre.createElement("tipoDeElemento")

*/

//Para crear elementos creaeElement()
const div = document.createElement("div");

//Para insertarlo appendChild
document.body.appendChild(div);

//Código para agregar una imagen a mi documento

//1. Creo la imagen
var appendImg = document.createElement("img");
appendImg.src = "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png";
appendImg.alt = "Imagen Sorpresa";

//2. Insertar
document.body.appendChild(appendImg);
