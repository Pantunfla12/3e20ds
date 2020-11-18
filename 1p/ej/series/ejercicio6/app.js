// lucas


function print(){

  let i = 0;
  let x = 0;
  let cont = 0;

  do {

    if (i == 1) {

      console.log(2);
      
    }else if (i == 2){

      console.log(1);

    }else if (i > 2){

      x = (i-1)+(i-2);
      console.log(x);

    }
    
    i = i+1;

    cont = cont+1;

    } while (cont<=10); 



}
print();