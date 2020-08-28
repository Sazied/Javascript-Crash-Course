console.log('hello!');
// alert('Hello!');

// Variables
/*Use let instead of var 
 where, var would be eg. var b = 'smoothie' , use let instead */
let b = 'smoothie';
console.log(b);

let someNumber = 45;
// console.log(someNumber);

// let age = prompt('What is your age?');

//Manipulate DOM with Javascript 
/*... It's a fancy way of saying 
change HTML with Javascript*/

// document.getElementById('someText').textContent = age;

// Numbers in Javascript 

let num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;

console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 * 2);

// Increment/Decrement by any number 
num1 += someNumber;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
More importantly, use const instead of function
where function would be eg. function fun() {...}; use const 
as shown! 
*/ 

 const fun = () => {
    console.log('This is a funny function!');
}

fun();

/* Create a function that displays 
your name in the console log  after you 
put it in*/

const greeting = (yourName) => {
    let result = 'Hello ' + yourName;
    console.log (result);
    document.getElementById('someText').textContent = result;
}

// let name = prompt('What is your name?');

// greeting(name);

// How do arguments work in fuctions? 
// How do we add 2 numbers together in a function? 

const addNumber = (num1, num2) => {
    let result = num1 + num2;
    console.log(result); 
}

addNumber(4,3);

// While loops

// let num = 0;

// while (num < 100) {
//     num += 3;
//     console.log(num);
// }

// For loop 

for (let num = 0; num <= 100; num+=20) {
    console.log(num);
}

// Data types
let yourAge = 18; //number 
let yourName = 'Sazied'; //string 
let name = {first: 'Sazied', last: 'Hassan'}; // object 
let truth = false; // boolean 
let groceries = ['apple', 'banana', 'orange']; // array
let random; // undefined
let nothing = null; // value null

// String in Javascript (common methods)
let fruit = 'banana, apple, orange, blackberry';
let moreFruits = 'banana\napple'; // new line 
console.log(fruit, moreFruits);

console.log(moreFruits.length);
console.log(fruit.indexOf('n')); // (starts from 0)
console.log(fruit.slice(2, 4)); //(including, up to)
console.log(fruit.replace('ban', '123')); 
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase()); 
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));
console.log(fruit.split(',')); //split by a comma

// Array
