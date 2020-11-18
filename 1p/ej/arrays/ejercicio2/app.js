// -1, 3, -5, ...

function print(){

    let num = [];
    num [0] = 1

    for (let i = 0; i < 10; i++) {

        num[i] = -num[i];
        console.log(num[i]);

        let v = Math.sign(num[i]);

        if ( v == 1 ) {
            
            num[i+1] = num[i]+2;
      
          }else if (v == -1){
      
            num[i+1] = num[i]-2;
            
          }
    }
}

print();



