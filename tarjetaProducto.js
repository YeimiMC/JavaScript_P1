//1. Obtener los elementos del HTML parq guardarlos en variables

//Almaceno el lugar de destino de mi tarjetita en una constante 
const container = document.getElementById("product-container");
const botonAgregarProductos = document.getElementById("agregarProducto");


//Almacenar el lugar del formulario en variables de JS
let nomnbreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");

console.log(nomnbreProducto);

function agregarProductos(){

//Vamos a guardar estos valores de mis inputs en diferentes variables
var valorInputProducto = nomnbreProducto.value;
var valorInputDescripcion = descripcionProducto.value;
var valorInputImagen = imagenProducto.value;

console.log(valorInputProducto);
console.log(valorInputDescripcion);
console.log(valorInputImagen);


//Quiero que cada tarjeta tenga su propio div o contenedor
const productCard = document.createElement("div"); //Aquí se está usando el createElement para que cada tarjeta de producto va a tenr su propio div

    //Creo el elemento
    productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
    <br>
    <br>
`;
//Aquí usamos las backticks ``

//Agregaar esa tarjeta de producto al container especificado
//al contenedor le agregamos el (hijo) 
    //Inserto el elemento
container.appendChild(productCard); 

}

//Creamos el evento
botonAgregarProductos.addEventListener("click",  agregarProductos);



