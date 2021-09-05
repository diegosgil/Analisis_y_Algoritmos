/**
 * ¿De cuentos modos pueden ubicarse en una fila de 10 sillas a 4 personas?
 * (Permutación)
 */

 function factorialRecursivo(numero) {
    if(numero == 0){
        return 1;
    }else{
        return numero * factorialRecursivo(numero-1);
    }
}

function resultado() {
    let sillas = 10;
    let personas = 4;    
    let p = (factorialRecursivo(sillas)) / (factorialRecursivo(sillas-personas));
    console.log("Hay", p, "modos de ubicar 4 personas en 10 sillas");
}

console.time("ejercicio1");
resultado();
console.timeEnd("ejercicio1");