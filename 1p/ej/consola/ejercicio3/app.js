// factorial

function print(){
    const readline = require ('readline');
    
    let rl =  readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
        
    });
    
    
    rl.question('Ingresa el numero a factorizar: ', (n) => {
 
        console.log(n + "! = " + factorial(n) + "\n");
        console.log("y de forma recursiva se obtinen los siguientes resultados: \n")
      

        for (let i = n; i > 0; i--) {

            console.log( i + "! = " + factorial(i));
            
        }

    rl.close();
    
    });
    
    }

    print();


    function factorial (n) {
        var total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    }
