// Ln (1+x) = x - x^2/2 + x^3/3 - ... +

function print(){
    let a = 2;
    const readline = require ('readline');
    
    let rl =  readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
        
    });
    
    rl.question('Ingrese el valor de n: ', (n) => {
        rl.question('Ingrese el valor de x: ', (x) => {

            x = parseInt(x);
            n = parseInt(n);
            a = parseInt(a);

            for (let i = 0; i < (n/2); i++) {
     
            console.log("Ln(" +(1+x)+ ") = " +x+ " - " +x+ "^" +a+ "/" + a);
            a = a+1;
            console.log("Ln(" +(1+x)+ ") = " +x+ " + " +x+ "^" +(a)+ "/" + (a));
            a = a+1;
    
            }
    
        rl.close();
    
      });
    });
    
    }
    print();

