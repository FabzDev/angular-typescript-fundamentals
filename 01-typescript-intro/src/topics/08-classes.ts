export class Person {
    constructor(
        public name:string, 
        private address:string = 'no address'
        ){}
}

export class Hero extends Person{
    constructor(
        public alterEgo:string = 'ironman',
        public age:number = 40,
        public realName:string = 'Tony'
        
        ){super(realName, 'New York');};
}

const ironman = new Hero('ironman', 33, 'Fabio');

console.log(ironman);

