/* 
Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai"
  Store all teas before chai in a new array named selectedTeas
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  const sTea = teas[i];
  if (sTea !== "chai") {
    selectedTeas.push(sTea);
    // console.log(`Just added ${sTea.toUpperCase()} to selectedTeas...`);
  } else {
    // console.log("just hit chai");
    break;
  }
}
// console.log(selectedTeas);

/* 
Write a 'for' loop that loops through the array ["london", "New york", "Paris", "Berlin"] and skips "paris".
  Store the other cities in a new array named visitedCities.
*/

let cities = ["london", "New york", "Paris", "Berlin"];
let visitedCities = [];

for (let city = 0; city < cities.length; city++) {
  if (cities[city] !== "Paris") {
    visitedCities.push(cities[city]);
  }
}
// console.log(visitedCities);

/* 
Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and stop when the number '4' is found.
  Store the numbers before '4' in an array named 'smallNumbers'.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const number of numbers) {
  if (number !== 4) {
    smallNumbers.push(number);
    // console.log(`adding ${number} to smallNumbers...`);
  } else {
    /* console.log(
      `just hit the forbidden one... you shall not say is name... (it's ${number}...)`
    ) */
    break;
  }
}
// console.log(smallNumbers);

/* 
Use a for-in loop to loop through and object containing city populations.
  Stop the loop when the population of "Berlin" is found and store all previous cities population in a new object named "cityPopulations".

*/

let citiesPopulations = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulation = 0;

for (const city in citiesPopulations) {
  const cPopulation = citiesPopulations[city];
  if (city !== "Berlin") {
    cityPopulation += cPopulation;
    /*     console.log(
      `adding ${city}'s population (${cPopulation}) to the counting. New total is ${cityPopulation}`
    ); */
  } else {
    break;
  }
}

/* console.log(
  `The total population of the cities, except Berlin is ${cityPopulation}`
); */

/* 
Write a 'forEach' loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]
  stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'.
*/

let availableTeas = [];
let bTeas = ["earl grey", "green tea", "chai", "oolong tea"];
let stop = false;

bTeas.forEach((bTea) => {
  if (stop) return;
  if (bTea === "chai") {
    stop = true;
    return;
  } else {
    availableTeas.push(bTea);
  }
});
// console.log(availableTeas);

/* 
Write a 'for' loop that iterates through the array [2, 5, 7, 9].
  Skip the value '7' and multiply the rest by 2. Store the results in a new arrat named doubledNumbers.
*/

let doubledNumbers = [];
let pNumbers = [2, 5, 7, 9];
let minI;

for (let i = 0; i < pNumbers.length; i++) {
  const vNumber = pNumbers[i];
  if (vNumber === 7) {
    minI = i;
  } else {
    if (i > minI) {
      doubledNumbers.push(vNumber * 2);
    }
  }
}

// console.log(doubledNumbers);

shortTeas = [];
for (const tea of teas) {
  if (tea.length < 10) {
    shortTeas.push(tea);
  } else {
    break;
  }
}

console.log(shortTeas);
