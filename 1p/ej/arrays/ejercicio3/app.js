// fibonacci


function print(){

    let x = [];
    x[0] = 0;
    x[1] = 1;
    x[2] = 0;
    let i = 0;
  
    do {
      
      console.log(x[2]);
      x[2] = x[0]+x[1];
      x[0] = x[1];
      x[1] = x[2];

      i = i+1;
   
  
    } while (i<10); 
    
  }
  
  print();