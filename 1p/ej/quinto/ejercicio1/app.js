// renglón del trianguloPascal()

function print(){

    console.log("el quinto renglon del triangulo es: " +triangle(4));

}

print();


function triangle(n) {
    if (n <= 0) return 1;
    return row(triangle(n - 1))
  }
  
  function row(lastRow) {
    let nextRow = []
    nextRow.push(1)
    for (let i = 0; i < lastRow.length - 1; i++) {
      nextRow.push(lastRow[i] + lastRow[i + 1])
    }
    nextRow.push(1)
    return nextRow
  }


