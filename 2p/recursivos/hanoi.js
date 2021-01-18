//hanoi

var n = 4; // cantidad de discos
var t1 = [], t2 = [], t3 = [];


// Coloca en orden n discos en t1

towers();

// torres al iniciar

show(); 

/*----------------------------------------------*/

hanoi(n, t1, t2, t3);

// torres al finalizar el proceso 

show(); 


function hanoi(n, ori, aux, des) {

 if(n === 1) 

  m(ori, des);

 else {

  hanoi(n - 1, ori, des, aux);
  m(ori, des);
  hanoi(n - 1, aux, ori, des);

 }

}

function m(ori, des) { 

 des.push(ori.pop()); 

}

function towers() {

 for(var i = 0; i < n; i++) 

  t1.push(n - i);

}


function show() {
 console.log(t1);
 console.log(t2);
 console.log(t3);
 console.log();


}