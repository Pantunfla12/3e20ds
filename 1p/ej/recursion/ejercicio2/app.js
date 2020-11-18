// Factorial

let steps = 0;


function factorial(n) {
    if (n<=1) return 1;
    steps = steps+1;
    return n* factorial(n-1);
    
}

// esto es para poder capturar un numero...    
const readline = require ('readline');

let rl =  readline.createInterface({

    input: process.stdin,
    output: process.stdout

    
});


rl.question('Ingresa un numero: ', (n) => {
 
 
    let start = new Date();
    console.log(+n+ "! = " +factorial(n));
    let end = new Date();

    let time = end-start;
    time = time/1000;
    console.log("tardo: " +steps+ " pasos");
    console.log("tomo: " +time+ " segundos");

    rl.close();

  });

    //¿podemos mejorar el tiempo de ejecución? si ¿cómo? no tengo idea

  