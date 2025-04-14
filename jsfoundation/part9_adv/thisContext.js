const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet; //it loses the context
greetFunction(); // no context

const boundGreet = person.greet.bind({name: "John"}) // adds new context
boundGreet(); //new context greet

// treat (this) as context
//bind, call and apply