class Person {
    public name: string;
    private surname: string;
    public age: number;

    constructor(name:string, surname: string, age:number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    };

    showDetails():void {
        console.log(`Person name: ${this.name}, Person surname: ${this.surname}, Person age: ${this.age} `);     
    };
};

const hikmat = new Person('Hikmat', 'Rajabli', 22);
hikmat.showDetails();


class Employee extends Person {
    private salary: number;

    constructor(name: string, surname: string, age: number, salary: number) {
        super(name,surname, age);
        this.salary = salary;
    };

    showDetails(): void {
        super.showDetails();
        console.log(`Person salary: ${this.salary}`);
        
    }
    salaryConverter(): void {
        console.log(this.salary * 1.7);
    };
};

const hikmatWithSalary = new Employee('Hikmat', 'Rajabli', 22, 2550);
hikmatWithSalary.salaryConverter();
hikmatWithSalary.showDetails();
