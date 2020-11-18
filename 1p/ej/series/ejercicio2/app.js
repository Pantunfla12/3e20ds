// -1, 3, -5, ...


function print(){

    let x = 1;
    let i = 0;

  do {
    x = -x;
    console.log(x);

    let v = Math.sign(x);

    if ( v == 1 ) {

      x = x+2;

    }else if (v == -1){

      x = x-2;
      
    }
    
    i = i+1;

   
 

  } while (i<10); 



}

print();

