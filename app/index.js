import Person from './person';

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  greet() {
    console.log(`Hello is it ${this.name} you're looking for?`);
  }
}

let nick = new Student('Nick', 30);
nick.greet();