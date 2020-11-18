// S=[3,1,4,2,3]  max(s)

function print(){

    let s = [3,1,4,2,3];
    let x = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] < s[i+1]) {

            x = s[i+1];
            s[i+1] = s[i];
            s[i] = x;

        }   
    }
    
    max = s[s.length-1];
    console.log("el numero mayor es: " +max)
    

}

print();