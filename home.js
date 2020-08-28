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
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]); // access value at index 2nd 

fruits[0] = 'pear';
console.log(fruits); // change values

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // another way to append 
console.log(fruits); 
fruits.shift(); // removes first elements from an array 
console.log(fruits); 
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli']; 
let allGroceries = fruits.concat(vegetables); // adding arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4)); 
console.log(allGroceries.reverse()); 
console.log(allGroceries.sort()); // default sort is alphabetical

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2]; 
console.log(someNumbers.sort(function(a, b) {return a-b})); //sorting in an ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); //sorting in an descending order

let emptyArray = new Array(); 
for (num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray); 

// Objects in Javascript 
// dictionaries in Python 

let student = {
    first: 'Sazied', 
    last: 'Hassan', 
    age: 23, 
    height: 170,
    studentInfo: function() {  // passing a function to an object as a key value pair 
        return this.first + ' ' + this.last + '\n' + this.age + '\n' + this.height; 
    }
};
// console.log('name:', student.first, student.last);
// console.log('age:', student.age);
// console.log('height:', student.height, 'cm'); 
// student. first = 'not Sazied'; // change value in key pairs in objetcs 
// console.log(student.first); 
student.age++; 
console.log(student.age); 
console.log(student.studentInfo()); 

// Conditionals, Control flows (if else)
// 18-35 is my target demographic 
/* Bollean Logical Operators 
&& AND
|| OR */ 

// let age = prompt('What if you age?'); 

// if ( (age >= 18) && (age <= 35) ) {
//     status = 'target demo'; 
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);  
// }

// Switch statements in Javascript 
// defferentiate between weekday vs. weekend 
// day 0 --> Sunday 
// day 6 --> Saturday 

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text); 