class transponer

{
    constructor() {}
    transponer (a)
    {
        let at = a[0].map((_, colIndex)=>a.map(row => row[colIndex]))
        console.log(a)
        console.log(a.toString())
        console.log(at);
        console.log(at.toString());

    }
}
let array = [[1,2,3],[4,5,6],[7,8,9]];
let x = new transponer();
x.transponer(array);