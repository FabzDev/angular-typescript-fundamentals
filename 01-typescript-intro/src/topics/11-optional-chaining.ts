
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fabio'
}

const passenger2: Passenger = {
    name: 'Fabio',
    children: ["Alejandro", "Aurora"]
}

const howManyChilds = (pass: Passenger): number => {
    if(!pass.children){
        console.log(0);
        return 0;
    }
    const amount = pass.children!.length || 0;
    console.log(pass.name, amount);
    return amount;
}

howManyChilds(passenger1);
