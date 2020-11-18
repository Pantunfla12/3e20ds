// sen x 


function print(){
    

    let x = 1;
    let f = 0;

    for (let i = 0; i < 5; i++) {


        f = x-(Math.pow(x,3)/factorial(3));
        
        console.log("sen 3 = 3 - 3^" + x +"/" +x+ "!" + " = " + f );
        x = x+1;

        f = x+(Math.pow(x,3)/factorial(3));

        console.log("sen 3 = 3 + 3^" + x +"/" +x+ "!" + " = " + f );
        x = x+1;
            
        }

        
    }

    function factorial(num){

        let x = 1;
        let i = num;
      
       do {
      
        x = x * i;
      
        i = i-1;
         
       } while (i>0);
      
       return x;
      
      }

print();

