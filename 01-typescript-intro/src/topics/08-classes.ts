export class Person {
    public name: string;
    private address: string;

    constructor(){
        this.name = 'Fabio'
        this.address = 'New York'
    }
    
}

const ironman = new Person();

console.log(ironman);
console.log(ironman.name);
console.log(ironman.address);

