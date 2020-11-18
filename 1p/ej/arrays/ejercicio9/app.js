// factorial

function print(){

    let num = [];
    num[0] = 1;

    for (let i = 0; i < 10; i++) {
      
      factorial(num[i]);
      num[i+1] = num[i]+1;

    }
    
  }
  
  function factorial(num){
  
    let x = 1;
    let i = num;
  
   do {
  
    x = x * i;
  
    i = i-1;
     
   } while (i>0);
  
   console.log(num+"! = " +x);
  
  }
  print();