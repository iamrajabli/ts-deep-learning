"use strict";
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    ;
    showDetails() {
        console.log(`Person name: ${this.name}, Person surname: ${this.surname}, Person age: ${this.age} `);
    }
    ;
}
;
const hikmat = new Person('Hikmat', 'Rajabli', 22);
hikmat.showDetails();
