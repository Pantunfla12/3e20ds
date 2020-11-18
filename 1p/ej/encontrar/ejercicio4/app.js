// S=[3,1,4,2,3]  existenRepetidos(S)

function print(){

    let s = [3,1,4,2,3];
    let cont = 0;
    let num = 0; 

    for (let i = 0; i < s.length; i++) {
        for (let k = 1; k < s.length; k++) {
            
            if (i == k ) {
                
            }else{

                if (s[i] == s[k]) {

                    num = s[i];   
                    cont = cont+1;
                
                }
            }
                
        }

        }
        
        console.log("el numero que se repite es: " +num+ " y se repite " + cont + " veces");
    }
    

print();