// Ln 2 = 1 - 1/2 + 1/3 - ... +

function print(){
    let a = 2;
    const readline = require ('readline');
    
    let rl =  readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
        
    });
    
    rl.question('Ingrese el valor de n: ', (n) => {
            a = parseInt(a);
            n = parseInt(n);

            console.log("Ln(" +(a)+ ") = " +1);

            for (let i = 0; i < (n/2); i++) {
     
            console.log( " - " +(1)+ "/" +a);
            a = a+1;
            console.log( " + " +(1)+ "/" +a);
            a = a+1;
    
            }
    
        rl.close();
    
      });
    
    }
    print();
