// De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar?, r<=n

function print(){

    let n = 10;
    let f = factorial(n);

    console.log( "se pueden generar: " +f+ " simbolos" );

}

print();


function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
