class Persona{
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad;
    }
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre + "tengo "+ this.edad);
    }
}


class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
        super(nombre, edad);
        this.añosDeExperiencia =añosDeExperiencia;
    }

    codear(){
        console.log("Soy "+this.nombre + "codeo desde  "+ this.añosDeExperiencia + "años");
    }
} 

var Florencia = new Persona("Florencia ",29);
var programador1 = new Programador ("Florencia", 29, 1);
//Florencia.saludar();
//programador1.codear();
programador1.saludar();
programador1.saludar.codear()

