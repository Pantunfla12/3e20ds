// S=[3,1,4,2,3]  avg(s)

function print(){

    let s = [3,1,4,2,3];
    let t = 0 ;
    
    for (let i = 0; i < s.length; i++) {
        
    t = t + s[i];     

    }
  
    t = t/s.length;
    console.log("el promedio de [3,1,4,2,3] es = " + t ); 

}

print();