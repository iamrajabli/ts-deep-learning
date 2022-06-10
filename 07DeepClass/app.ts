// OOP

// 1. Encapsulation +
// 2. Inheritance
// 3. Abstarct class
// 4. Polymorphism


class Example {
    private name: string;
    public age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    public sayHello():void {
        console.log('Hello!');
        
    }

    public get manipulatedData() : number {
        return this.age + 15;
    }

}

const ralorem = new Example('Hikmat', 22);
console.log(ralorem.age);
console.log(ralorem.manipulatedData);
