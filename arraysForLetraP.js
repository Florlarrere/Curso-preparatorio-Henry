function encontrarLetraP(string){
var letras = string.split("");
for (let i=0; i<letras.length; i++){
    if(letras[i]==="p"){
        console.log("Si contiene a p");
    }
}
}

encontrarLetraP("Javascript");
encontrarLetraP("Henry");
