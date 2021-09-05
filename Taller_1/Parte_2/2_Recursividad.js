/**
 * Igual que el ejercicio anterior, pero meter en el array números aleatorios sin que se
 * repitan.
 */

 let numeros = [];

 /**
  * @param {*} tamaño :Tamaño deseado del array 
  */
 function ArrayAleatorio(tamaño) {
     if (numeros.length == tamaño){
         console.log(numeros);
     }else{
         if (numeros.length == 0) {
             numeros.push(Math.floor(Math.random() * tamaño));
             ArrayAleatorio(tamaño);
         }else{
             let numero = Math.floor(Math.random() * tamaño);
             Comparar(numero, numeros.length-1);
             ArrayAleatorio(tamaño);
         }
     }
 }
 
 /**
  * @param {*} numero :Número aleatorio a comparar 
  * @param {*} l :Tamaño actual del array
  */
 function Comparar(numero, l) {
     if (l < 0) {
         numeros.push(numero);
     }else{
         if (numero == numeros[l]) {
             
         }else{
             Comparar(numero, --l);
         }
     }  
 }
 
 const readline = require('readline');
 
 let captura = readline.createInterface({
     input : process.stdin, output: process.stdout
 });
 
 captura.question('Tamaño del array ', function(respuesta) {
     console.time("Recursividad2");
     ArrayAleatorio(parseInt(respuesta));
     console.timeEnd("Recursividad2");
     captura.close();     
 });