// triangular

function print(){

    let i = 0;
    let x = 1;
    let s = 0;
  
    do {

      s = (x*(x+1))/2;
      x = x+1;
      i = i+1;
    
      } while (i<4); 
  
      console.log(s);

  }
  
  print();