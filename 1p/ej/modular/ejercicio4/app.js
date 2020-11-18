// Si son las 10 a.m.
// ¿qué horas serán en n hrs?

function print(){

    let total = 0;
    let day = 24;
    let f = 0;
    let hour = 10;
   

      let n = 17;
      f = Math.trunc(n/day);
      total = f*24;
      total = n - total;
      hour = hour-total; 

      if (hour < 1) {
          hour = hour * -1;
      }
  
      if (hour >= 12) {
  
          console.log("En " +n+ " horas serán las " +hour+ ":00 p.m.");
  
      }else if (hour < 12){
  
          console.log("En " +n+ " horas serán las " +hour+ ":00 a.m.");
  
      }
    }
print();