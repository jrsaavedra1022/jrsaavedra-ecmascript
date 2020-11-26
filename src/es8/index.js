// ********************************************
// ecmascript 8 - matriz convert entries

const data = {
    frontend: 'Oscar',
    backend: 'Jose',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// ********************************************
// ecmascript 8 - matriz convert values
const data2 = {
    frontend: 'Oscar',
    backend: 'Jose',
    design: 'Ana'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

// ********************************************
// ecmascript 8 - strings helps

const string = "Hello"; 
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '----'));

// ********************************************
// ecmascript 8 - async await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000) 
        : reject(new Error("Test Error"))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

// another example

const anotherFunction = async() => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();