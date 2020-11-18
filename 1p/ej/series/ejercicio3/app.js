// fibonacci


function print(){

  let x = 0;
  let y = 1;
  let z = 0;
  let i = 0;

  do {
    
    console.log(z);
    z = x+y;
    x = y;
    y = z;
    i = i+1;
 

  } while (i<10); 
  
}

print();