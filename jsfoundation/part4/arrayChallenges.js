/* 
1. Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea".
  Access the first element of the array and store it in a variable name "firstTea". 
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

/* 
Declare an array named 'cities' containing "London", "Tokyo", "Paris", "New York". Acces the third element in the array and store it in a variable named 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[3];
console.log(favoriteCity);

/* 
You have an array named 'teaTypes containing "herbal tea", "white tea" and "masala chai". change the second element of the array to " jasmine tea"
 */

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/* 
Declare an array named 'citiesVisited' containing "Mumbai" an "Sydney". 
   Add "Berlin" to the array using the 'push' method.
*/

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");
console.log(citiesVisited);

/* 
You have an array named 'teaOrders' with "chai", "iced tea", "matcha", and "earl grey".
  Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();

console.log(teaOrders);
console.log(lastOrder);

/* 
You have an array named 'popularTeas' containing "green tea", "oolong tea", "chai".
  Create a soft copy of this array named 'softCopyTeas'.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas;

// now make it hard copy named hardCopyTeas

let hardCopyTeas = [...popularTeas];
popularTeas.pop();

console.log(popularTeas);
console.log(hardCopyTeas);

//
