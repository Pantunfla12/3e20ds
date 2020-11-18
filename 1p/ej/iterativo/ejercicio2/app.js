// Tomar tiempo e imprimir resultado para, n=10e5


function print(){

    let num = [];
    let n = 100000; //10e5
    let steps = 0;

    //numeros random (pueden ser repetidos)
    for (let i = 0; i < n; i++) {

        num[i] = Math.floor(Math.random()*(n-1) +1);
        
    }

      let start = new Date();
      
      // bubblesort
      for (let i = 0; i < num.length; i++) {
		for (let j = 0; j < num.length; j++) {
			if (num[j] > num[j + 1]) {
				let temp = num[j];
				num[j] = num[j + 1];
                num[j + 1] = temp;
                steps = steps+1;
			}
		}
    }
    // imprimir numeros ordenados
    for (let i = 0; i < n; i++) {
        console.log(num[i]); 
 
    }

    let end = new Date();
    let time = end-start;
    time = time/1000;



console.log("ordenar " +n+ " numeros tomo: " +steps+ " pasos");
console.log("ordenar " +n+ " numeros tomo: " +time+ " segundos");

//¿podemos mejorar el tiempo de ejecución? claro que si ¿cómo? no sabria decirle con certeza,
// pero estoy consiente que el codigo actualmente no es optimo . 


}      
  
  print();