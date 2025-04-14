/* Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */

function stringToNumber(input) {
  if (isNaN(Number(input))) {
    return "Not a number";
  } else {
    return Number(input);
  }
}

/* Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
 */

function flipBoolean(input) {
  return !Boolean(input);
}

/* Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */

function whatAmI(input) {
  return `I'm a ${typeof input}!`;
}

/* Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey. */

function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}

/* Playing with Variables
Task:

Perform the following mathematical operations
on the provided variables a and b
Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/

//DO NOT CHANGE THEESE VALUES
let a = 18;
let b = 24;

function add() {
  const result = a + b;
  return result;
}

function subtract() {
  const result = b - a;
  return result;
}

function multiply() {
  const result = a * b;
  return result;
}

function divide() {
  const result = b / a;
  return result;
}

function increment() {
  let result = a;
  result += 1;
  return result;
}

function decrement() {
  let result = b;
  result -= 1;
  return result;
}

function reminder() {
  const result = b % a;
  return result;
}

// ARRAYS AND METHODS

/* Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array */

function filterNumbers(arr) {
  return arr.filter((num) => typeof num === Number);
}

/* Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array
 */

function reverseArray(arr) {
  return arr.reverse();
}

/* Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
*/

function findMax(arr) {
  return Math.max(arr);
}

/* Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/

function removeDuplicates(arr) {
  // Create a new Set from the array, which automatically removes duplicates
  // Then, use the spread operator (...) to convert the Set back into an array
  return [...new Set(arr)];
}

/* Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
 */

function flattenArray(arr) {
  // Use the .flat() method with Infinity to flatten the array completely
  return arr.flat(Infinity);
}

/* 
Loops
Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers

// obs "n" é variável por isso demorei para entender o exercício. js itera entre os numeros naturais por padrão. entao no ex ele pede que possa ser ecolhido n, e somar todos os números até n (os numeros naturais, de toda forma) desenhando pra lembrar quando ler novamente....
 */

function sumOfN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/* Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4 */

function printMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    table.push(`${n} * ${i} = ${result}`);
  }
  return table;
}

/* 
Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
 */

function countVowels(str) {
  let count = 0;
  const vowels = "AEIOU";
  for (let char of str) {
    if (vowels.includes(char.toUpperCase())) {
      count++;
    }
  }
  return count;
}


/* Higher-Order Functions and Arrow Functions
All the following tasks must be strictly be writtern in arrow functions only.



Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions
 */


const squareNumbers = (arr) => arr.map(num => num * num);


/* Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions
 */

const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);


/* Task 3: Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
 */

const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum,num) => sum + num, 0);

/* Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions 
*/

const getNames = (arr) => arr.map(item => item.name);


/* Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
 */

const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");