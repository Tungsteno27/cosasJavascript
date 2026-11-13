import Estudiante from "./estudiante.js";

let estudiante = new Estudiante();
estudiante.nombre= "WILLIAN";
estudiante.carrera = "ISW";

console.log(estudiante);
console.log(estudiante.saludar())
console.log(estudiante.verPromedio())