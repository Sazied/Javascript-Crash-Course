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