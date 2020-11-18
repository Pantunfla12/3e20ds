// Aleatorios

function print(){

    let random = [];
  
    for (let i = 0; i < 10; i++) {
        
        random[i] = Math.random()*10;
        random[i] = random[i].toFixed(2);
        console.log(random[i]);    
    }
  }
  
  print();