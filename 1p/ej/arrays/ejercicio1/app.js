// 1,3,5, ...

function print(){

    let num = [];
    num [0] = 1

    for (let i = 0; i < 10; i++) {
        
        console.log(num[i]);
        num[i+1] = num[i]+2;
        
    }

}

print();



