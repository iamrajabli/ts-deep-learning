"use strict";
// OOP
// 1. Encapsulation +
// 2. Inheritance
// 3. Abstarct class
// 4. Polymorphism
var Type;
(function (Type) {
    Type["Baku"] = "Baku";
    Type["Sumgayit"] = "Sumgayit";
    Type["Fuzuli"] = "Fuzuli";
    Type["Kharkiv"] = "Kharkiv";
    Type["Kiev"] = "Kiev";
})(Type || (Type = {}));
class Example {
    constructor(name, age, ourCities) {
        this.ourCities = null;
        this.name = name;
        this.age = age;
    }
    myCity() {
        console.log(this.ourCities);
    }
    sayHello() {
        console.log('Hello!');
    }
    get manipulatedData() {
        return this.age + 15;
    }
}
class ExampleMore extends Example {
    constructor(name, age, surname) {
        super(name, age, Type.Kiev);
        this.name = name;
        this.age = age;
        this.surname = surname;
        this.surname = surname;
    }
}
const ralorem = new ExampleMore('Hikmat', 22, 'Rajabli');
ralorem.sayHello();
ralorem.myCity();
console.log(ralorem.surname);
console.log(ralorem.manipulatedData);
