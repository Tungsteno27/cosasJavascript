import persona from "./persona.js"

export default class estudiante extends persona{
    constructor(){
        super();
        this.carrera = "";
    }
    estudiar(){
        return this.nombre +" esta estudiando "+ this.carrera;
    }
    #calcularPromedio(){
        return 65;
    }
    verPromedio(){
        return "Promedio: " + this.#calcularPromedio();
    }
}