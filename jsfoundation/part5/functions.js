/* 
Create a function named 'orderTea' that takes one parameter, 'teaType', Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai"
  Call 'confirmOrder' from within 'orderTea' and return the result.
*/

function orderTea(teaType) {
  function confirmOrder(teaType) {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder(teaType);
}

let teaOrder = orderTea("chai");
// console.log(teaOrder);

/* 
Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
  Store the result in a variable named 'totalCost'.
*/

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(7, 28598);
// console.log(totalCost);

/* 
Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument "earl grey".
Return the result of calling 'makeTea'.
*/

function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}

/* function processTeaOrder(fn) {
  return fn("earl grey");
} */
let order = makeTea();
/* console.log(order); */

/* returning a function and passing an function as an argument is called first-class Function */

/* as parameters are just place-holders you can just type anything ther, its not rare that people define them as fn */

/* 
Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like "Making green tea".
Store the returned function in a variable named 'teaMaker' and call it with "green tea"
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}...`;
  };
}

let teaMaker = createTeaMaker();
/* console.log(teaMaker("green tea")); */
