class order{

    constructor(){

        this.elements = [];
        this.size = 0
    }

  add(x){

      this.elements[this.size] = x;
      this.size++

  }

  order (arr){

      for(let x = 0; x < arr.length; x++)
      for(let y = 0; y< arr.length ; y++)

      {

         if(arr[y]>arr[y+1])

         {

             let s = arr[y]        
             arr[y] = arr[y + 1];   
             arr[y + 1] = s        
              
          }

        }

    }
    
    jesus(array){

      for(let i = 0; i < this.size; i++)

      {

        array[i] = this.elements[i];

      }

    }

}

let o = new order();
let array = []

for(i = 0; i < 10; i++) o.add(Math.round(Math.random()*10));

o.jesus(array);

console.log(o)
console.log(array.toString());

o.order(array);
console.log(array.toString())