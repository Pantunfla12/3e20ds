// Si son las 10 a.m.
// ¿qué horas fueron hace 2500hrs?

function print(){

    let total = 0;
    let day = 24;
    let f = 0;
    let hour = 10;
   
    

    f = Math.trunc(2500/day);
    total = f*24;
    total = 2500 - total;
    hour = hour-total;

    if (hour >= 12) {

        console.log("Hace 2500 horas fueron las: " +hour+ ":00 p.m.");

    }else if (hour < 12){

        console.log("Hace 2500 horas fueron las: " +hour+ ":00 a.m.");

    }

}

print();