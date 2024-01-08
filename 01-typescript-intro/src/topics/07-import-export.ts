import { Product, getTotal } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
    description: 'Nokia',
    price: 100
    }, 
    {
    description: 'iPad',
    price: 200
    }
]

const baseTax = 0.15;

const [total, tax] = getTotal({products: shoppingCart, tax: baseTax});

console.log(`Total ${total}`);
console.log(`Tax ${tax}`);
