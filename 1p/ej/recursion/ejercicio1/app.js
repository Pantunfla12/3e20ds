// Fibonacci

let steps = 0;

function fibonacci(n) {
  steps = steps+1;
    return n < 1 ? 0
    
    : n <= 2 ? 1
    
    : fibonacci(n - 1) + fibonacci(n - 2);
    
    }
 
    
// esto es para poder capturar un numero...    
const readline = require ('readline');

let rl =  readline.createInterface({

    input: process.stdin,
    output: process.stdout

    
});


rl.question('Ingresa el numero de la sucesion fibonacci que quieres imprimir (ejemplo 10-->55):  ', (n) => {
    let start = new Date();
    console.log("El numero "+n+ " de la sucesion fibonacci es: " +fibonacci(n));
    let end = new Date();
    let time = end-start;
    time = time/1000;
    console.log("tardo: " +steps+ " pasos");
    console.log("tomo: " +time+ " segundos");

    rl.close();

  });



   // ¿podemos mejorar el tiempo de ejecución? si ¿cómo? no se.

    
    

  