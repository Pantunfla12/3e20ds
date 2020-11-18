// Fibonacci


function print(){

    let x = 0;
    let y = 1;
    let z = 0;
    let i = 0;
  
    do {
    
      z = x+y;
      x = y;
      y = z;
      i = i+1;
   
    } while (i<4); 

    console.log(z);
    
}
  
  print();