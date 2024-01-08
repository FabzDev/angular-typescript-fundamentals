    export interface Product{
    description: string;
    price: number;
    }

    export interface TaxProductOption{
        products: Product[];
        tax: number;
    }

    // const celu: Product = {
    //     description: "Nokia A1",
    //     price: 150.0
    // }

    // const tablet: Product = {
    //     description: "iPad air",
    //     price: 250.0
    // }

    // const tax = 0.15;

    // const shoppingCart: Product[] = [celu,tablet];

    export function getTotal(option: TaxProductOption): [number, number]{
        const {products: prod, tax: tax} = option;
        let total: number = 0;
        prod.forEach(({price:pri}) => {
            total += pri;
        });
        return [total, total * tax];
    }

    // const result = getTotal({
    //     products: shoppingCart,
    //     tax: tax
    // });

    // const [total, taxes] = result
    // console.log(`Total: $${total}`);
    // console.log(`Tax: $${taxes}`);