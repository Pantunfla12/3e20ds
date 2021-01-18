class doble{

    constructor(data, next, prev){

        this.data=data;
        this.next=next;
        this.prev=prev;

    }

}


class  DoubleLinkedList{

    constructor() {

        this.head=null
        this.tail=null;
        this.size=0;

    }


    add2Head(data){

        const newN = new doble(data,this.head, null);

        if(this.head){

            newN.next=this.head;
            this.head.prev=newN;
            this.head=newN;

        }else{

            this.head=newN;
            this.tail=newN;

        }

        this.size++;

    }


    add2Tail(data){

        const newN = new doble(data,null, this.tail);

        if(this.tail){

            newN.prev=this.tail;
            this.tail.next=newN;
            this.tail=newN;

        }else{

            this.tail=newN;
            this.head=newN;

        }

        this.size++;

    }


    print(){

        let current = this.head;    
        let result = '';   

        while(current){   

            result += current.data + ' ←→ '; 
            current = current.next; 

        }

        return result += ' ∞';

    }


    reversePrint(){

        let current = this.tail;    
        let result = '';  

        while(current){  

            result += current.data + ' ←→ '; 
            current = current.prev; 

        }

        return result += ' ∞';

    }

}

const doubleLinkedList=new DoubleLinkedList();

doubleLinkedList.add2Head(5);
doubleLinkedList.add2Head(3);
doubleLinkedList.add2Tail(2);
doubleLinkedList.add2Tail(54);
doubleLinkedList.add2Head(1);

console.log(doubleLinkedList.print());
console.log(doubleLinkedList.reversePrint());
console.log(doubleLinkedList);