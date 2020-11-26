// ********************************************
// ecmascript 10 - aplanar arreglos

let array = [[1,2,3], [1,2,3, [1,2,3]]];
console.log(array.flat(2));

// ********************************************
// ecmascript 10 - flat map

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

// ********************************************
// ecmascript 10 - trim

let hello = '  hello world      ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

// ********************************************
// ecmascript 10 - catch

try {
    
}catch{
    error
}

// ********************************************
// ecmascript 10 - convert array to object

let entries = [["name", "oscar"], ["age", 32]];
let obj = Object.fromEntries(entries);
console.log(obj);


// ********************************************
// ecmascript 10 - object from type symbol

let mySymbl 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);