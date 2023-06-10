export class Person {
    constructor(name){
        this.name = name
    }
    sayHello(name){
        console.log(`Helo ${name} my name is ${this.name}`);
    }
}