// ********************************************
// ecmascript 9 - operador de reposo de extracción

const obj = {
	'name': 'Jose',
	'age': 32,
	'country': 'Colombia'
}

let {name, ...all} = obj;
console.log(name, all);

// ********************************************
// ecmascript 9 - propagación

const obj1 = {
	'name': 'Jose',
	'age': 32,
}

const obj2 = {
    ...obj1,
    'country': 'Colombia'
}

console.log(obj2);

// ********************************************
// ecmascript 9 - promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Hello World"), 3000)
        : reject(new Error("Test error"))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo"))

// ********************************************
// ecmascript 9 - regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2020-11-26");
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);