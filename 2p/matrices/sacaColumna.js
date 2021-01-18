
// a two-dimensional array
var array = [[1,2,3],[4,5,6],[7,8,9]];

// take the n column
var n = 1
var c = array.map(function(value,index) { return value[n]; });
console.log(c);