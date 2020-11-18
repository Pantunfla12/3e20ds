 // har = 1 + 1/2 + ... + //suma harmónica

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

            console.log("har = " +1);

            for (let i = 0; i < n; i++) {
     
            console.log( " + " +(1)+ "/" +a);
            a = a+1;
    
            }
    
        rl.close();
    
      });
    
    }
    print();