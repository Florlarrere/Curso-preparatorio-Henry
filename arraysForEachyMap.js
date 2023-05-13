var numeros  = [1,2,3,4,5]
numeros.forEach ((num)=>console.log(num));
numeros.forEach((num)=> {if (num===3){console.log(num)}});

var masUno = numeros.map((num)=>{
    return num + 1;
});
console.log (masUno);
