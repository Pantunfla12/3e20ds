//mergesort

function mergeSort(input) {

    const {length:arraySize} = input;

    if (arraySize < 2) return input;

    
    const mid = Math.floor(arraySize/2);
    const sortedLeftArray = mergeSort(input.slice(0,mid));
    const sortedRightArray = mergeSort(input.slice(mid, arraySize));


    return merge(sortedLeftArray, sortedRightArray);
  }
  

  function merge (l, r){

    let res = []

    while(l.length && r.length){

      if(l[0]< r[0]){

        res.push(l.shift())

      }else{

        res.push(r.shift())

      }

    }

      return [...res, ...l, ...r];
  }
  
  //print
  console.log(mergeSort([10,13,2,40,-10,1]))