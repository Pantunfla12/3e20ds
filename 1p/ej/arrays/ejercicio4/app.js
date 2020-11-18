// primos


function print(){

    let i = 0;
    let cont = 0;
    let num = [];
    num[0] = 1;
  
    do {
  
      if (primo(num[i])){
  
        console.log(num[i]);
        num[i+1] = num[i]+1;
        cont = cont+1;
  
      }else{
  
        num[i+1] = num[i]+1;
  
      }    
      i = i+1;
  
      } while (cont<10); 
  
  

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
  
  