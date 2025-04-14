// closures are basicly functions that contains another fn that retains the memory of the result. example below

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());

// when you call the function the counter++ increases the counter on the outer function by one. and if it is called again, it'll be again icremented by one, so it would counter === 7.
