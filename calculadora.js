//Autor: Willian Alexander Tolano Fierros 262797
//Practica 18: callbacks
//Materia: Aplicaciones Web
//Maestro: Martín Guadalupe Bernal Lugo
//Fecha: 10/11/2026

//Función que ejecuta una operación aritmética sobre dos números
//Recibe el primer y segundo número y un callback o función como parámetros
function calculadora(numero1, numero2, callback) {
    //Una vez que se mande a llamar al método calculadora, la función callback del resultado pasará a ser la dada
    //por el parámetro
    let resultado = callback(numero1, numero2);
    //Imprime el resultado
    console.log(`resultado: ${resultado}`);
}
//Pruebas de las 4 operaciones aritméticas
calculadora(4,4 , (a,b)=> a + b);
calculadora(4,4 , (a,b)=> a - b);
calculadora(4,4 , (a,b)=> a * b);
calculadora(4,4 , (a,b)=> a / b);
