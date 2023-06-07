console.log("Mini sistema contable")

/*Mini Sistema contable - Ejercicio 

Crear 5 instancias
Parametos(nombre, edad, RFC, número de días trabajados)
ISR del 31%
sueldo por día = $156.78Trabajan a la semana 7 días, 8 horas por día

Métodos:
imprimir lo siguiente
info de mi empleado -
sueldo por mes bruto y neto -
sueldo por quincena bruto y neto
sueldo por día bruto y neto -

*/ 

//1.- Propiedades
class Trabajador{
    nombre = "";
    edad = 0;
    RFC = "";
    díasTrabajados = 0;
    sueldoPorDia = 156.78;
    diasSemana = 7;
    horasPorDia = 8;
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
        const sueldoBrutoDia = this.sueldoPorDia;
        return sueldoBrutoDia
    }

    sueldoNetoDia(){
        const sueldoBrutoDia = this.sueldoPorDia;
        const isr = this.sueldoPorDia * this.porcentajeISR;
        const sueldoNetoDia = this.sueldoPorDia - isr;return sueldoNetoDia;
        return sueldoNetoDia;
    }
     //Aquí había un error porque estaba usando this.sueldoNetoDia por lo que la variable no existía para hacer el return

}

//Instanciamos 
let trabajador1 = new Trabajador("Sabino", 23, "MACS000305", 1);
let trabajador2 = new Trabajador("Alejo", 33, "LOZA900125", 27);
let trabajador3 = new Trabajador("Óscar", 27, "CASO850731", 20);
let trabajador4 = new Trabajador("Macarena", 26, "GOFM960207", 30);
let trabajador5 = new Trabajador("Julia", 19, "HEMJ040817", 15);


console.log("El sueldo del trabajador se desglosa de la siguiente manera. ");
trabajador1.imprimirInfoTrabajador()
console.log(
"Sueldo mensual bruto:", trabajador1.sueldoBrutoMes(),
" Sueldo mensual neto: ", trabajador1.sueldoNetoMes(),
" Sueldo quincenal bruto:", trabajador1.sueldoBrutoQuincena(),
" Sueldo quincenal neto: ", trabajador1.sueldoNetoQuincena(),
" Sueldo diario bruto: ", trabajador1.sueldoBrutoDia(),
" Sueldo neto diario: ", trabajador1.sueldoNetoDia());

console.log("El sueldo del trabajador se desglosa de la siguiente manera. ");
trabajador2.imprimirInfoTrabajador();
console.log(
"Sueldo mensual bruto:", trabajador2.sueldoBrutoMes(),
" Sueldo mensual neto: ", trabajador2.sueldoNetoMes(),
" Sueldo quincenal bruto:", trabajador2.sueldoBrutoQuincena(),
" Sueldo quincenal neto: ", trabajador2.sueldoNetoQuincena(),
" Sueldo diario bruto: ", trabajador2.sueldoBrutoDia(),
" Sueldo neto diario: ", trabajador2.sueldoNetoDia());

console.log("El sueldo del trabajador se desglosa de la siguiente manera. ");
trabajador3.imprimirInfoTrabajador()
console.log(
"Sueldo mensual bruto:", trabajador3.sueldoBrutoMes(),
" Sueldo mensual neto: ", trabajador3.sueldoNetoMes(),
" Sueldo quincenal bruto:", trabajador3.sueldoBrutoQuincena(),
" Sueldo quincenal neto: ", trabajador3.sueldoNetoQuincena(),
" Sueldo diario bruto: ", trabajador3.sueldoBrutoDia(),
" Sueldo neto diario: ", trabajador3.sueldoNetoDia());

console.log("El sueldo del trabajador se desglosa de la siguiente manera. ");
trabajador4.imprimirInfoTrabajador()
console.log(
"Sueldo mensual bruto:", trabajador4.sueldoBrutoMes(),
" Sueldo mensual neto: ", trabajador4.sueldoNetoMes(),
" Sueldo quincenal bruto:", trabajador4.sueldoBrutoQuincena(),
" Sueldo quincenal neto: ", trabajador4.sueldoNetoQuincena(),
" Sueldo diario bruto: ", trabajador4.sueldoBrutoDia(),
" Sueldo neto diario: ", trabajador4.sueldoNetoDia());

console.log("El sueldo del trabajador se desglosa de la siguiente manera. ");
trabajador5.imprimirInfoTrabajador()
console.log(
"Sueldo mensual bruto:", trabajador5.sueldoBrutoMes(),
" Sueldo mensual neto: ", trabajador5.sueldoNetoMes(),
" Sueldo quincenal bruto:", trabajador5.sueldoBrutoQuincena(),
" Sueldo quincenal neto: ", trabajador5.sueldoNetoQuincena(),
" Sueldo diario bruto: ", trabajador5.sueldoBrutoDia(),
" Sueldo neto diario: ", trabajador5.sueldoNetoDia());




/*
Pendiente de segunda revisión para comentarios
*/
