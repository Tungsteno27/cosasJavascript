//Autor: Willian Alexander Tolano Fierros 262797
//Practica 18: callbacks
//Materia: Aplicaciones Web
//Maestro: Martín Guadalupe Bernal Lugo
//Fecha: 10/11/2026


//Función que recibe un ingrediente y un callback como parámetros
function cortarIngredientes(ingredientes, callback){
    setTimeout(()=>{
        //Después de 2.5 segundos se imprime el mensaje y se manda a llamar a la función del callback
        console.log(`Cortando: ${ingredientes}`)
        callback();
    }, 2500)
}
//Funcion que recibe una acción y un callback como parámetros
function cocinar(accion, callback){
    setTimeout(()=>{
        //Después de 3.5 segundos se imprime el mensaje y se manda a llamar a la función del callback
        console.log(`Cocinando: ${accion}`)
        callback();
    }, 3500)
}
//Función que recibe un plato como parámetro e imprime en consola, sin callback o timeout
function servirPlato(plato){
    console.log(`Listo, puedes disfrutar de ${plato}`)
}
//Función suprema que prepara un plato llamando a las funciones anteriores y enviando muchos callbacks
//primero imprime el mensaje de inicio, luego espera segundos e imprime el mensaje de la siguiente función
//y sigue así hasta que se hace el callback al final que imprime lo recibido en el parámetro de la función principal
// "Receta Completada"
function prepararReceta(plato, callback){
    console.log(`Iniciamos la preparacion de ${plato}`)
    cortarIngredientes("vegetales", ()=>{
        cocinar("saltear", ()=>{
            cortarIngredientes("Pollo", ()=>{
                cocinar("freir", ()=> {
                    cocinar("mezclar todo", ()=> {
                        servirPlato(plato);
                        callback();
                    })
                })
            })
        })
    })
}
prepararReceta("Pollito", ()=>{console.log("Receta completada")})