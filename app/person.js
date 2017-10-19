class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello I'm ${this.name} ${this.age} years old`);
  }
}

export default Person;