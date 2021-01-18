class hasLoops {
   constructor(data,next)
   {
     this.data = data;
     this.next = next
   };
}

class  List{
    constructor(){

        this.head = null;
        this.size = 0;

    }


    add(data){

        let nuevoNode = new hasLoops(data,null); 

        if(!this.head){

            this.head = nuevoNode 

        }else{

            let actual = this.head;

            while (actual.next){

                actual = actual.next; 

            } 

            actual.next = nuevoNode;

        }

        this.size++; 

    }


    print(){

        if(!this.size)return null;

        let current = this.head;
        let result = "";

        while(current){

            result += current.data += " → ";
            current = current.next;

        }

        result += "∞";

        return result;

    }

    getSize(){return this.size} 
    isEmpty(){return this.size === 0 ? true : false} 
    removeData(data)

    {

        let current = this.head;
        let previous = null;

        while(current != null){

            if(current.data === data){

                if(!previous){

                    this.head = current.next  

                }else{

                    previous.next = current.next; 

                }

                this.else--;

                return current.data;

            }

            previous = current; 
            current = current.next 

        }

        return null

    }

    hasloop (head){

        let current = head.next;
        let x = 0;
        let check;
        let y;

        do{

            check = head;
            y = 0;

            do{

                if (check === current){

                    return true;

                }

                y += 1;
                check = check.next;
                

            } while (y < x && check);

            x += 1;

            current = current;

        } while (current);

        return false;

    };

}

let l = new List()

for(let i = 0; i < 10; i++)l.add(i+1); 
console.log();
console.log(`Lista: ${l.print()}`);
console.log("Has Loops?:", l.hasloop(1));
console.log();