// Si hoy es lunes....
// qué dia será en 11 dias?

function print(){

    let s = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']; 
    let f = 0;
    let n = 11; 
    let week = 7;
    let start = s[0]; 


    f = n/week;

    if (f == 1){

        console.log(start)

    }else if (f > 1 ) {

        let x = n%week;
        x = Math.round(x);
       console.log("En 11 dias será: " + s[x]);
     
    }
}

print();
