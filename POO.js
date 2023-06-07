
/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/


//Arreglos (objeto)
var casaArreglo = [3, 2, 1, 4, 2, "Verde", 6, "Rojo"];

//Objetos. Es una colección de datos que tienen colecciones de elementos o datos.

const casa = { //En los objetos se cambian los corchetes por llaves (a diferencia de los arrays) y se separan por comas.
    numHabitaciones : 3,
    numBanios : 2,
    color: "Rojo",
}

//Para imprimir la información de un objeto, utilizo la referencia al objeto, después punto, y por último el nombre de la propiedad o método que quiero mostrar.

console.log("El color de mi casa es " , casa.color)

//Instrucción: Crar 50 casas, con la misma estructura pero en colores doferentes.
//Clase para generar una plantilla, esta platilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa información se va a ir personalizando.

class casaPlantilla {
    //1. Definir mis propiedades como variables, para posteriormente agregarle valores (Este valor se le asigna cuando instanciamos el objeto, o sea que al inicio solo crearemos las plantillas o clases)

    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";


    //3. Definir una función constructora. Esta función es una función especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parámetros de construcción y así poder instanciar nuestro objeto.

    //Los parámetos se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente.
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color; //En una función constructora o de métodos de una clase (objeto), this permite acceder y trabajar con las propiedades y métodos específicos del objeto en el que se encuentra.
        
    }

    //2. Definir los métodos como funciones, porque estas funciones nos dicen qué es lo que puede hacer mi objeto. Aquí no necesitaremos usar la palabra function sino que las funciones son las del objeto y dependen de este objeto por lo que dejan de llamarse funciones y se convierten en métodos, y tienen un dueño (el dueño es la clase) o sea el objeto, y esos métodos dependen de el.

    encenderLuces(){
        console.log("Click, luces encendidas");
        //Se deben definir los atributos y se deben poder utilizar estos atributos en las funciones/métodos

    }

    abrirVentanas(){
        console.log("Swiiift, ventanas abiertas");

    }

    guardarmeDelFresnito(){
        console.log("Qué agusticidad");

    }



} //En la clase definimos todo de forma normal (o sea se declaran las variables como normalmente las usamos con = y ;) pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.

/*Instanciar objetos, usamos la siguiente sintaxis:

variable con nombre = palabra reservada new y después la referenciaDelaClase (parametros de construcción);

Let objeto = new ClaseObjeto (parametros);

*/

//Tengo una variable llamada "Casa de Yeimi", que es un nuevo objeto de la clase "casa Plantilla" y que tiene los siguiente parámetros.
let casaDeYeimi = new casaPlantilla (4, 2, 2, "turquesa");

console.log(casaDeYeimi);
casaDeYeimi.guardarmeDelFresnito();
casaDeYeimi.encenderLuces();
casaDeYeimi.abrirVentanas();  //Estos se van a ir imprimiendo ya sin el console.log porque ya se declaró que se imprima

let casaDeFelipe = new casaPlantilla (6, 3, 3, "azul");
let casaDeCarlos = new casaPlantilla (7, 3, 4, "azul");
let casaDeAxel = new casaPlantilla (9, 4, 4, "azul");

console.log(casaDeFelipe);
console.log(casaDeAxel);
console.log(casaDeCarlos);


//Ejemplo de POO con Gatitos
class gatitos {
    //1.- Propiedades
    nombre = "";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    vacunas = false;

    //3. Constructor
    constructor ( nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas) {
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }



    //2. Métodos

    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad)
        console.log("El tamaño de mi gato es; ", this.tamanio)
        console.log("El número de vidas de mi gato es: ", this.numeroVidas)
        console.log("La raza de mi gato es: ", this.raza)
    };

    maullar(){
        console.log("Miauuu");
    };

    rasguniar(){
        console.log("El gato ha rasguñado el sillón");
    };

    ronronear(){
        console.log("Rrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas")
        }
    }


}

//nombre edad tamanio numeroVidas raza

//Instanciar 
let juanchoDelCampo = new gatitos ("Juancho del campo", 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);
let alejandro = new gatitos ("alejandro", 5, "Mediano", "Travieso y enojón", 1, "Gris", "citadino", true);
let simon = new gatitos ("simón", 3, "Mediano", "Serio", 6, "Blanco con negro", "citadino", true);
let pancho = new gatitos ("pancho", 6, "Grande", "Flojo", 8, "Negro", "citadino", true);
let julian = new gatitos ("julian", 1, "Chico", "Juguetón", 9, "Blanco con manchas café", "citadino", true);

//instanciar 5 gatos
juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();
alejandro.imprimirInfo();
alejandro.cuidarGato();
simon.imprimirInfo();
simon.cuidarGato();
pancho.imprimirInfo();
pancho.cuidarGato();
julian.imprimirInfo();
julian.cuidarGato();

/* JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.
*/

//Objeto normal de JavaScript

objeto ={
    nombre: "Felipe",
    edad: 15,
}

console.log("Este es un objeto normal", objeto);
console.log("Este es el nomnbre de mi objeto", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar.

Sintaxis para pasar de objeto normal de JS a JSON es

JSON.stringify(objeto que quiero serializar)

*/

//console.log(JSON.stringify(objeto)); //Se muestra en el servidor como cadena de texto porque los servidores no leen objetos, es una forma de hacerlo universal.

let objetoSerializado = (JSON.stringify(objeto));

console.log("Este es un objeto serializado", objetoSerializado);

console.log(objetoSerializado.nombre);

//TAREA. Leer documentación de Stringify y Parse. Además, localStorage y sessionStorage










