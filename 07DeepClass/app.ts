// OOP

// 1. Encapsulation +
// 2. Inheritance
// 3. Abstarct class
// 4. Polymorphism

enum Type {
    Baku = 'Baku',
    Sumgayit = 'Sumgayit',
    Fuzuli = 'Fuzuli',
    Kharkiv = 'Kharkiv',
    Kiev = 'Kiev'
}

class Example {
    public name;
    public age;
    public ourCities = null;
    constructor(name: string, age: number, ourCities: Type) {
        this.name = name;
        this.age = age;
    }

    public myCity():void {
        console.log(this.ourCities);
        
    }

    public sayHello(): void {
        console.log('Hello!');

    }

    public get manipulatedData(): number {
        return this.age + 15;
    }

}



class ExampleMore extends Example {
    constructor(public name: string, public age: number, public surname: string) {
        super(name, age, Type.Kiev);
        this.surname = surname;
    }
}

const ralorem = new ExampleMore('Hikmat', 22, 'Rajabli');
ralorem.sayHello();
ralorem.myCity();

console.log(ralorem.surname);
console.log(ralorem.manipulatedData);
