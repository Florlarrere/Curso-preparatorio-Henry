function Auto (puertas, color, marca, año, ruedas){
    this.puertas=puertas;
    this.color=color;
    this.marca=marca;
    this.año=año;
    this.ruedas=ruedas;

    this.información = function(){
        console.log("Este es un "+this.marca + " de color " + this.color)
}
}
var miPrimerAuto = new Auto(4,"Rojo","Ferrari",18,4);
miPrimerAuto.información()


// console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);