class in2List{ 

    constructor(data, next){

        this.data=data;
        this.next=next;

    }
}

class LinkedList{   

    constructor() {

        this.head=null;
        this.size=0;

    }


    add(data){  

        const newN = new in2List(data,null); 

        if(!this.head){   

            this.head=newN;

        }else{  

            let current = this.head; 
        
            while(current.next){  

                current=current.next; 

            }

            current.next=newN;

        }

        this.size++;

    }


    removeFrom(i){  

        if (i < 0 || i > this.size) return null;

        let current = this.head;
        let previous = null;

        if(i === 0) current = this.head;

        else{

            for(let x = 0; x < i; x++)

            {

                previous = current;
                current = current.next;

            }

            previous = current;

        }

        return current.data
    }

    getsize(){  

        return this.size;

    }

}

const linkedList = new LinkedList();
const array = [];  

linkedList.add(4);     
linkedList.add('Jhin');    
linkedList.add('Udyr');
linkedList.add('Chayanne');
linkedList.add(2542345234);   


console.log(linkedList);  


for (let i = 0; i < linkedList.getsize(); i++){

    array[i]=linkedList.removeFrom(i);

}


console.log(array);