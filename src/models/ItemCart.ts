import Product from './Product';

export default class ItemCart {
    product: Product;
    quantity: Number;
    size: Number;

    constructor(
        product: Product,
        quantity: Number,
        size: Number
    ) {
        this.product = product;
        this.quantity = quantity; 
        this.size = size;
    }
}