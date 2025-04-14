let sum = 0;
let i = 1;

while (i <= 5) {
  console.log(`We're adding ${sum} + ${i}`);
  sum += i;

  i++;
  console.log(`sum is now ${sum}`);
}

console.log(sum);

// Write a `while` loop that counts down from 5 to 1 and stores the number is an array named `countdown`

let countdown = [];
let count = 5;

while (count > 0) {
  countdown.push(count);
  count--;
  console.log(`countdown is now ${countdown}`);
}

console.log(countdown);

/* 
Write a 'do while' loop that prompts a user to enter their favourite tea type until they enter "stop".
  Store each tea type in an array named 'teaCollection'.
*/

/* let teaCollection = [];
let fTea;
do {
  fTea = prompt("Enter your favourite tea type: ");

  if (fTea !== "stop") {
    teaCollection.push(fTea);
  }
} while (fTea !== "stop");
console.log(teaCollection); */

/* 
Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'
*/

let total = [];
let j = 1;

do {
  if (j < 4) {
    total.push(j);
    j++;
  }
} while (j < 4);

/* console.log(total);

let totalB = [];
let jB = 1;

while (jB <= 3) {
  totalB.push(jB);
  jB++;
}
console.log(totalB); */

/* 
Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new array named 'multipliedNumbers'
*/
let arr = [2, 4, 6];
let multipliedNumbers = [];
let k = 0;

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  multipliedNumbers[index] = element * 2;
}

console.log(multipliedNumbers);

/* 
Write a 'for' loop that lists all the cities in the array ['Paris', 'New York', 'Tokyo', 'London',] and stores each city in a new array named 'cityList'.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
  const element = cities[index];
  console.log(element);

  cityList.push(element);
}

console.log(cityList);
