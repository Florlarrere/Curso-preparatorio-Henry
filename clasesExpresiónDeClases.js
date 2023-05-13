class Auto{
    constructor(puertas, color, marca, año, ruedas){ 
    this.puertas=puertas;
    this.color=color;
    this.marca=marca;
    this.año=año;
    this.ruedas=ruedas;
    }
    informacion(){
        console.log("Este es un " + this.marca + "de color " + this.color)
    }
}

var miSegundoAuto= new Auto(4,"negro","Rang Over", 2024, 4 )
miSegundoAuto.informacion()

//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);