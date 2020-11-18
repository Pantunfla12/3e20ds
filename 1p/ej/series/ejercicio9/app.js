// factorial

function print(){
  
  let num = 1;
  for (let i = 0; i < 10; i++) {
    
    factorial(num);
    num = num+1;
    
  }
  
}

function factorial(num){

  let x = 1;
  let i = num;

 do {

  x = x * i;

  i = i-1;
   
 } while (i>0);

 console.log(num+"! = " +x);

}
print();