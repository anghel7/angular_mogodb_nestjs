function fnA() {
    console.log("Ejecutando funcion A");
}

function fnB() {
    //console.log("Ejecutando funcion B");
    setTimeout(function () {
        console.log("Ejecutando funcion B");  
    }, 500);
}

function fnC() {
    console.log("Ejecutando funcion C");
}
