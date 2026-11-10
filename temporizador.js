//Autor: Willian Alexander Tolano Fierros 262797
//Practica 18: callbacks
//Materia: Aplicaciones Web
//Maestro: Martín Guadalupe Bernal Lugo
//Fecha: 10/11/2026

//Función que espera tres segundos antes de imprimir un mensaje de éxito
//Recibe un callback como parámetro
function temporizador(callback){
    //Primero imprime el texto de iniciando temporizador
    console.log("Iniciando temporizador");
    //Después, dentro del setTimeout se manda a llamar al callback
    // que como se puede ver más abajo, lo único que hace la función es imprimir "Tiempo esperado con éxito"
    //Sin embargo el callback no se llamará inmediatamente, tendrá que esperar 3 segundos por el setTimeout
    setTimeout(()=> {
        callback();
    }, 3000)
}
temporizador(()=>{console.log("Tiempo esperado con éxito")});


