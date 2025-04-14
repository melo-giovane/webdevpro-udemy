// Checking if a number is greater than another numbe:

let num1 = 5;
let num2 = 8;

console.log("I am regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is not greater than num2");
}

console.log("I am regular bottom code");

// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("you are on");
}

// Checking if a variable is a number or not:

let score = 44;

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("This is not a number");
}

// Checking if an array is empty

let items = [];

if (items.length == 0) {
  console.log("items is empty");
} else {
  console.log("items is not empty");
}
