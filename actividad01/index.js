const { title } = require('process');
const Alumno =require('./Alumno.js');


let nombre = "Jonathan";

const alumno1 = new Alumno ("Carlos", "Ruiz", 27, "DW" , ["apps Hibridas", "proyecto final"]);



console.log("Nombre completo:", alumno1.obtenerDatos());
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Edad:", alumno1.retornarEdad());



alumno1.mostrarMaterias();

alumno1.agregarMateria("Historia");
console.log("Materias después de agregar Historia:");
alumno1.mostrarMaterias();

alumno1.modificarEdad(55);
console.log("Edad modificada:", alumno1.retornarEdad());

console.log(alumno1.edad);