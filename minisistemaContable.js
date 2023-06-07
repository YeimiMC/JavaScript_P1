console.log("Mini sistema contable")

/*Mini Sistema contable - Ejercicio 

Crear 5 instancias
Parametos(nombre, edad, RFC, número de días trabajados)
sueldo por día = $156.78
ISR del 31%
Trabajan a la semana 7 días, 8 horas por día

Métodos:
imprimir lo siguiente
info de mi empleado -
sueldo por mes bruto y neto -
sueldo por quincena bruto y neto
sueldo por día bruto y neto -

*/ 

//1.- Propiedades
class trabajador{
    nombre = "";
    edad = 0;
    RFC = "";
    díasTrabajados = 0;
    sueldoPorDia = 156.78;
    diasSemana = 7;
    horasPordia = 8;
    porcentajeISR = 0.31; //al ser porcentaje

    //2. Constructor
    constructor(nombre, edad, rfc, diasTrabajados) {
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.diasTrabajados = diasTrabajados;
      }

    //3. Métodos

    //3.1 Imprimir información del trabajador. Aquí usaremos plantillas de cadenas (o template strings) para combinar variables y texto en los mensajes que se imprimen por consola utilizando la sintáxis `${aquí lo que queremos que se imprima}`  (En lugar de concatenar manualmente las variables y el texto utilizando el operador + )
    imprimirInfoTrabajador() {
        console.log(`Nombre: ${this.nombre}`); //se coloca dentro de las llaves {} porque ahí debe ir la parte a la que queremos hacer referencia de ese objeto.
        console.log(`Edad: ${this.edad}`);
        console.log(`RFC: ${this.rfc}`);
        console.log(`Días trabajados por semana: ${this.diasSemana}`);
        console.log(`Horas trabajadas por día: ${this.horasPorDia}`);
        console.log(`Sueldo diario: ${this.sueldoPorDia}`);
      }

    //3.2 Calcular sueldos brutos y netos
    sueldoBrutoMes(){
        const sueldoBrutoMes = this.diasTrabajados * this.sueldoPorDia * this.diasSemana;
        return sueldoBrutoMes;
    }
    sueldoNetoMes(){
        const sueldoBrutoMes = this.sueldoBrutoMes();
        const isr = sueldoBrutoMes * this.porcentajeISR;
        const sueldoNetoMes = sueldoBrutoMes - isr;
        return sueldoNetoMes;
    }
    sueldoBrutoQuincena(){
        const sueldoBrutoQuincena = this.sueldoBrutoMes()/2;
        return sueldoBrutoQuincena;
    }
    sueldoNetoQuincena(){
        const sueldoNetoQuincena = this.sueldoNetoMes()/2;
        return sueldoNetoQuincena;
    }
    sueldoBrutoDia(){
        const sueldoBrutoDia = this.sueldoPorDia * this.horasPorDia
        return sueldoBrutoDia
    }

    sueldoNetoDia(){
        const sueldoBrutoDia = this.sueldoPorDia * this.diasTrabajados;
        const isr = sueldoBrutoDia * this.porcentajeISR;
        const sueldoNetoDia = sueldoBrutoDia - isr;
        return this.sueldoNetoDia
    }
    

}

//Instanciamos 
let trabajador1 = new trabajador("Sabino", 23, "MACS000305", 1);
let trabajador2 = new trabajador("Alejo", 33, "LOZA900125", 27);
let trabajador3 = new trabajador("Óscar", 27, "CASO850731", 20);
let trabajador4 = new trabajador("Macarena", 26, "GOFM960207", 30);
let trabajador5 = new trabajador("Julia", 19, "HEMJ040817", 15);


console.log("El sueldo de ", `${trabajador1.nombre}`, "es", trabajador1.sueldoBrutoMes());

/*Instanciar al trabajador 1
let sueldoBrutoMes = trabajador1.sueldoBrutoMes();
let sueldoNetoMes = trabajador1.sueldoNetoMes();
let sueldoBrutoQuincena = trabajador1.sueldoBrutoQuincena();
let sueldoNetoQuincena = trabajador1.sueldoNetoQuincena();
let sueldoBrutoDia = trabajador1.sueldoBrutoDia();
let sueldoNetoDia = trabajador1.sueldoNetoDia();

//Imprimir en consola al trabajador1
trabajador1.imprimirInfoTrabajador();

console.log("Sueldo mensual bruto : ", sueldoBrutoMes);
console.log("Sueldo mensual neto : ", sueldoNetoMes);
console.log("Sueldo quincenal bruto : ", sueldoBrutoQuincena);
console.log("Sueldo quincenal neto : ", sueldoNetoQuincena);
console.log("Sueldo diario bruto : ", sueldoBrutoDia);
console.log("Sueldo diario neto : ", sueldoNetoDia);



//Para el trabajador 1
trabajador1.imprimirInfoTrabajador();
trabajador1.sueldoBrutoMes();
trabajador1.sueldoNetoMes();
trabajador1.sueldoBrutoQuincena();
trabajador1.sueldoNetoQuincena();
trabajador1.sueldoBrutoDía();
trabajador1.sueldoNetoDía();
*/

/*
trabajador2.imprimirInfoTrabajador();

trabajador3.imprimirInfoTrabajador();

trabajador4.imprimirInfoTrabajador();

trabajador5.imprimirInfoTrabajador();
*/

