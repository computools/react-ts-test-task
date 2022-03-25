export interface Product {
    count: number;
    name: string;
    price: number;
}

export const calcTotalCount = (products:Product[]): number =>
    products.reduce((accumulator, product) => accumulator + product.count, 0);

export const calcAveragePrice = (products:Product[]): string =>
    (products.reduce((accumulator, product) => accumulator + product.price, 0)
        / products.length).toFixed(2);

export const generateNewNumbers = (min: number, max: number) => Math.round(min + Math.random() * (max - min));
