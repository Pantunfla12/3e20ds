// potencia x elevado a la k (tabla)

function print(){
  
    let num = [];
  
    for (let x = 1; x < 11; x++){
      
      for (let y = 1; y < 11; y++) {
        
        num[x,y] = Math.pow(x,y);
        console.log(num[x,y]);

      }
    }  
  }
  
  print();