// potencia x elevado a la k

function print(){
    const readline = require ('readline');
    
    let rl =  readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
        
    });
    
    
    rl.question('Ingresa el valor de x: ', (x) => {
        rl.question('Ingresa el valor de k: ', (k) => {
            

            let s = 0;

                
                s = Math.pow(x,k);
                console.log(x + "^" + k + " = " + s);
          
    
        rl.close();
    
      });
    });
    
    }
    print();