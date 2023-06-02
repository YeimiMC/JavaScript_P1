    console.log("Ejercicio de carreritas");

/*
En una carrera se tienen los siguientes corredores con su respectiva posición:
- Primer lugar : Roberto
- Segundo lugar: Andrea
- Tercer lugar: Jorge
- Cuarto lugar: Ramiro
- Quinto lugar: Sofia

Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además, Andrea baja una posición, Ramiro mantiene su lugar y el quinto lugar es reemplazado por José.

¿Cómo quedan las posiciones después de esas 3 vueltas?
*/

var posicionesCorredor = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

//Jorge adelanta a Roberto
posicionesCorredor.splice(2, 0, posicionesCorredor[0]); 
posicionesCorredor.splice(3, 1);

console.log(posicionesCorredor)

/*
posicionesCorredor.splice(3, 1);
posicionesCorredor[1] = "Jorge";
posicionesCorredor[3] = "Ramiro";
posicionesCorredor[4] = "José";

console.log("Las posiciones después de las 3 vueltas son", posicionesCorredor);
*/