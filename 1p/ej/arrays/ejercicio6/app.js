// lucas


function print(){

    let num = [];
  
    for (let i = 1; i < 11; i++) {

       num[i] = i;

        if (num[i] == 1) {
  
            console.log(2);
            
          }else if (num[i] == 2){
      
            console.log(1);
      
          }else if (num[i] > 2){
      
            num[i] = (i-1)+(i-2);
            console.log(num[i]);
      
        }     
    }
  }

  print();