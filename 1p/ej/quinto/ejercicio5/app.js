// primo

function print(){

    let i = 0;
    let x = 1;
  
    do {
  
      if (primo(x)){
        if (i == 4) {
            console.log(x);  
            i = i+1;
        }else{
        
        x = x+1;
        i = i+1;
    }
      }else{
  
        x = x+1;
  
      }

      } while (i<5); 
  
  }
  
  function primo(numero) {
  
    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }
  
  print();
  