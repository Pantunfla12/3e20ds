// sen x = x - x^3/3! + ... -

function print(){
    let a = 2;
    let z = 3;
    const readline = require ('readline');
    
    let rl =  readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
        
    });
    
    rl.question('Ingrese el valor de n: ', (n) => {
        rl.question('Ingrese el valor de x: ', (x) => {
             
                for (let i = 0; i < (n/2); i++) {
                    
                    console.log("sen " +x+ " = " +x+ " - " + x +"^" +(z)+ "/" +(z)+ "!" );
                    z = z+1;
            
                    console.log("sen " +x+ " = " +x+ " + " + x +"^" +(z)+ "/" +(z)+ "!" );
                    z = z+1;
                        
                    }

        rl.close();
    
      });
    });
    
    }
    print();