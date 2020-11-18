// triangular

function print(){

    let x = 1;
    let num = [];
    num[0] = 0;
  
    for (let i = 0; i < 10; i++) {
        
        console.log(num[i]);
        num[i+1] = (x*(x+1))/2;
        x = x+1;

        
    }

  }
  
  print();