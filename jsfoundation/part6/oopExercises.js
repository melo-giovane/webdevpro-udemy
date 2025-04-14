// Ex. 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet = () => `Hello my name is ${this.name} and I am ${this.age} years old.`;
}

let personOne = new Person("John", 25);
let personTwo = new Person("Novak", 32);

// Ex. 2
console.log(personOne.greet());
console.log(personTwo.greet());

class Student extends Person {
  constructor(name, age, grade) {
    super();
    this.grade = grade;
    this.name = name;
    this.age = age;
  }
  study = () => `${this.name} is studying.`;
}

let myStudent = new Student("Joshua", 29, 100);

console.log(myStudent.greet());
console.log(myStudent.study());


