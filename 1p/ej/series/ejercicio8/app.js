// potencia x elevado a la y (tabla)


function print(){
  
  let s = 0;

  for (let x = 1; x < 11; x++){
    
    for (let y = 1; y < 11; y++) {
      
      s = Math.pow(x,y);
      console.log(s);

      
    }
   
  }



}

print();