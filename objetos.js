// var deportes = {conBalon: ["Football", "Basketball", "Rugbi"], sinBalon: ["Boxeo", "Surf", "Treking"]};

var persona={nombre: "Lucas",edad:26, estudios: {esProgramador: true }};
console.log(persona.edad);
persona.nombre= "flor";
console.log(persona.nombre);
persona.edad=32;
console.log(persona.edad);


var autos={};
autos.marcas=["Ford","Audi","Ferrari"];
console.log(autos);

delete autos.marcas
console.log(autos);

var misFunciones = {saludar: function() {console.log("Hola")}};

misFunciones.saludar();

var atuendos ={manos:["Guantes", "Anillos"], pies: ["Zapatos","Soquetes"]};
console.log(atuendos.manos)

atuendos["piernas"]=["bermudas","pantalones"];
console.log(atuendos.piernas);
console.log(atuendos);
atuendos.cara=["full face"];
console.log(atuendos.cara);
console.log(atuendos);

var comidas= {}; //COMO GUARDAR FUNCIONES DENTRO DE UN OBJETO
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas[propUno]=["Frutas","Vegetales"];
    comidas[propDos]=["Hamburguesa", "Papas fritas"]
};
diferenciaDeNotaciones("saludable","No saludable");
console.log(comidas);