"use strict";
// OOP
// 1. Encapsulation +
// 2. Inheritance
// 3. Abstarct class
// 4. Polymorphism
class Example {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello!');
    }
    get manipulatedData() {
        return this.age + 15;
    }
}
const ralorem = new Example('Hikmat', 22);
console.log(ralorem.age);
console.log(ralorem.manipulatedData);
