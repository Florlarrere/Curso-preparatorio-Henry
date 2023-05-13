function mayorYmenorYpar(num){
    if (num>5 && num<10 && num%2===0)console.log(true);
    else console.log(false);
};
mayorYmenorYpar(8);
mayorYmenorYpar(7);

function operadorOr (str){
    if (str==="Henry" || str.length<2) console.log(true);
    else console.log(false);
}

operadorOr("Henry");
operadorOr("H");

function negacion(permiso){
    if (!permiso) console.log
("Tiene permiso");
}

negacion(true);
negacion(false);

function negacion(permiso){
    if (permiso===true) console.log
("Tiene permiso");
}

function negacion(permiso){
    if (permiso!==true) console.log
("Tiene permiso");
}

negacion(true);

