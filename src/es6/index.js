// ********************************************
function newFunction(name, age, country){
	var name = name || 'Jose';
	var age = age || 32;
	var country = country || 'Colombia';
	console.log(name, age, country);
}

//ecmascript 6 variables in functions
function newFunction2(name= "Jose", age=32, country="Colombia"){
	console.log(name, age, country);
}

newFunction2();
newFunction2("ricado", 23, "Mexico");


// ********************************************
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
//ecmascript 6 template literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ********************************************
let lorem = "This is a person with many wons for win \n"
+ " another phrase in this sentence.";
console.log(lorem);
//ecmascript 6 template literals - enter
let lorem2 = `This is a person with many wons for win 
another phrase in this sentence.`;
console.log(lorem2);

// ********************************************
let person = {
	'name': 'Jose',
	'age': 32,
	'country': 'Colombia'
}
console.log(person.name, person.age);
// ecmascript 6 - destructuración de objetos
let {name, age, country} = person;
console.log(name, age);

// ********************************************
let team1 = ['Jose', 'Julian', 'Ana'];
let team2 = ['Valeria', 'Yesika', 'Camilo'];
// ecmascript 6 - unir elementos
let education = ['David', ...team1, ...team2];
console.log(education);

// ********************************************
// ecmascript 6 - variables let, const and var
{
	var globalVar = "Global Var";
}

{
	let globalLet = "Global Let";
	console.log(globalLet);
}

console.log(globalVar);
const a = 'b';
// a = 'a'; // no podemos reasingar 
console.log(a);

// ********************************************
let _name = "Jose";
let _age = 32;

obj = {_name: _name, _age: _age};
// ecmascript 6 - crear objetos
obj2 = {_name, _age}
console.log(obj2);

// ********************************************
const names = [
	{name: 'Jose', age: 32},
	{name: 'Yesica', age: 23}
]

let listOfNames = names.map(function (item){
	console.log(item.name);
});
// ecmascript 6 - arrow functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
	
}

const listOfNames4 = name => {

}

const square = num => num * num;


// ********************************************
// ecmascript 6 - promesas
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if(true){
			resolve("Hey promise resolve !!");
		}else{
			reject("Upss !!!");
		}
	});
} 

helloPromise()
.then(response => console.log(response))
.then( () => console.log("Hello... "))
.catch(error => console.log(error))


// ********************************************
// ecmascript 6 - class and modules
// class
class calculator {
	constructor(){
		this.valueA = 0;
		this.valueB = 0;
	}
	//methods
	sum(valueA, valueB){
		this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA + this.valueB;
	}
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// modules

import hello from './module';
console.log(hello());

// generator

function* helloWorld(){
	if(true){
		yield 'Hello, ';
	}
	if(true){
		yield 'world';
	}
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// generator example
function* fibonacci(){
	var fn1 = 1;
	var fn2 = 1;
	while (true){  
	  var actual = fn2;
	  fn2 = fn1;
	  fn1 = fn1 + actual;
	  var reset = yield actual;
	  if (reset){
		  fn1 = 1;
		  fn2 = 1;
	  }
	}
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3