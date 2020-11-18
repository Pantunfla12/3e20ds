// S=[3,1,4,2,3]  min(s)

function print(){

    let s = [3,1,4,2,3];
    let x = 0;
    let min = 0;

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] > s[i+1]) {

            x = s[i+1];
            s[i+1] = s[i];
            s[i] = x;

        }   
    }
    
    min = s[0];
    console.log("el numero menor es: " +min)
    

}

print();