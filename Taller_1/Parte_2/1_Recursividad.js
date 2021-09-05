/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 */

 let numeros = [];
 /**
  * @param {*} tamaño :Tamaño del array
  */
 function ArrayAleatorio(tamaño) {   
     if (tamaño == 0) {
         console.log(numeros);
     }else{
         numeros.push(Math.floor(Math.random() * tamaño));
         ArrayAleatorio(--tamaño);
     }  
 }
 
 const readline = require('readline');
 
 let captura = readline.createInterface({
     input : process.stdin, output: process.stdout
 });
 
 captura.question('Tamaño del array ', function(respuesta) {
     console.time("Recursividad1");
     ArrayAleatorio(parseInt(respuesta));
     console.timeEnd("Recursividad1");
     captura.close();
 });