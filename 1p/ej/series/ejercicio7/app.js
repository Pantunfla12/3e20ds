// Aleatorios


function print(){

  let random = 0;
  let i = 0;

  do {

    random = Math.random()*10;
    random = random.toFixed(2);
    console.log(random);


    i = i+1;

    } while (i<10); 



}

print();