/**
 * Today you work at a store as the cashier, but 10 minutes before your lunch break, the cash register stops working.
 * Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
 * A grocery object has a product, a quantity and a price.
 */

function cashier(groceries: Grocery[]): number {
    let counter = 0;
    groceries.forEach(product => counter += product.quantity * product.price);
    return counter;
}

export { cashier };

interface Grocery {
    product: string;
    quantity: number;
    price: number;
}