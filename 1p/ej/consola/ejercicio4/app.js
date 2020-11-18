// primos

function print(){
    const readline = require ('readline');
    
    let rl =  readline.createInterface({
    
        input: process.stdin,
        output: process.stdout
    
        
    });
    
    
    rl.question('Ingresa la cantidad de numeros primos: ', (n) => {

        let i = 0;
        let x = 1;

        do {

            if (primo(x)){

                console.log(x);
                x = x+1;
                i = i+1;

            }else{

                x = x+1;

            }

        } while (i<n); 


    rl.close();
    
    });
    
}

print();



    function primo(numero) {

        for (var i = 2; i < numero; i++) {
      
          if (numero % i === 0) {
            return false;
          }
      
        }
      
        return numero !== 1;
      }
