// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null and undefined

let firstname;
let lastname = null;
console.log(firstname); //undefined
console.log(lastname); //null

//String

let myString = "hello";
let myStringOne = "Hola";
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";

let greetMessage = `${myString} ${username}!`;
console.log(greetMessage);

//Symbol
let sm1 = Symbol();// inside the parenthesis it names the symbol
let sm2 = Symbol();

console.log(sm1, sm2);
// sm1 == sm2  -> false, every single symbol is guarantee unique


