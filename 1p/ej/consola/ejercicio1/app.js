// aleatorios (min=1, max=n)

function print(){
const readline = require ('readline');

let rl =  readline.createInterface({

    input: process.stdin,
    output: process.stdout

    
});


rl.question('Ingresa el numero maximo aleatorio: ', (n) => {
    rl.question('¿Cuantos numero quieres que imprima?: ', (x) => {


    let random = 0;
    let i = 0;
  
    do {
  
      random = Math.random()*n;
      random = random.toFixed(2);
      console.log(random);
  
  
      i = i+1;
  
      } while (i<x); 

    rl.close();

  });
});

}
print();


    








