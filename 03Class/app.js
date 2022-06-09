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
class Employee extends Person {
    constructor(name, surname, age, salary) {
        super(name, surname, age);
        this.salary = salary;
    }
    ;
    showDetails() {
        super.showDetails();
        console.log(`Person salary: ${this.salary}`);
    }
    salaryConverter() {
        console.log(this.salary * 1.7);
    }
    ;
}
;
const hikmatWithSalary = new Employee('Hikmat', 'Rajabli', 22, 2550);
hikmatWithSalary.salaryConverter();
hikmatWithSalary.showDetails();
