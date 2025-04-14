let username = {
  firstname: "Hitesh",
  isLoggedin: true,
};

console.log(username);
console.log(typeof username);

console.log(username.firstname);

username.firstname = "Mr. H";

console.log(username.firstname);

username.lastname = "Choudhary";

console.log(username);

let today = new Date();
console.log(today.getDate());

// Array

let anotherUser = ["hitesh", true];

console.log(anotherUser[0]);

console.log(1 + "1");

//JS tries to guess what the type is but you should not rely on it
// JS considers true as 1 and false as 0

isNumber = false;
console.log(isNumber + 1);

// You can define the type with the notation like number(1)

//NaN means not a number but it is considered number inside js

// If null is converted to number it is considered 0

// if undefined is converted to number it is considered to be NaN




