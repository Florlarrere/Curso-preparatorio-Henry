var mascota={
animal: "perro", 
raza: "ovejero", 
amistoso:true, 
dueña:"María Lopez", 
info: function(){
    console.log("Mi perro es un"+ this.raza)
}
};

mascota.info()
console.log(mascota);