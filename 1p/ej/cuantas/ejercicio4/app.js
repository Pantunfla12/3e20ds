// De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?

function print(){

    let n = 8;
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