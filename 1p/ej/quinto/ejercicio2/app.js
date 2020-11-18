// lucas

function print(){

    let i = 0;
    let x = 0;
    let cont = 0;
  
    do {
  
    if (i > 2){

        x = (i-1)+(i-2);
        
    }
      
      i = i+1;
  
      cont = cont+1;
  
    } while (cont<=5); 

      console.log(x);
  
  
  }
  print();