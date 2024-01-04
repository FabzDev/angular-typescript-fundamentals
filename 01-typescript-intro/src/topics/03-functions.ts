export{};

function suma(a: number, b: number):number {
    return a + b;
}

const sumaArrow = (a:number, b:number):String => {
    return `${a+b}`;
}

function sumaOpt(firstNum: number, secondNum?: number, base: number = 2 ): number{
 return firstNum*base;
}

const result = suma(1,2);
const result2 = sumaArrow(1,2);
const result3 = sumaOpt(5);

// console.log({result});
// console.log({result2});
// console.log({result3});

interface Character {
    name: String;
    hp: number;
    showHeal: () => void; 
}

const gandalf :Character = {
    name:`Gandalf`,
    hp: 80,
    showHeal(){
        console.log(`Puntos de vida: ${this.hp}`)
    }
}

function giveHeal(char:Character, amt: number){
    char.hp += amt;
}

gandalf.showHeal();
giveHeal(gandalf,10);
gandalf.showHeal();

giveHeal(gandalf,110);
gandalf.showHeal();
