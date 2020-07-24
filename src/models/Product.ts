export default class Product {
    id: Number;
    description: String;
    color: String;
    price: Number;
    currency: String;
    thumbnailURL: String;
    maxresURL: String;

    constructor(
        id: Number,
        description: String,
        color: String,
        price: Number,
        currency: String,
        thumbnailURL: String,
        maxresURL: String,
    ) {
        try {
            this.id = id;
            this.description = description;
            this.color = color;
            this.price = Number(price);
            this.currency = currency;
            this.thumbnailURL = thumbnailURL;
            this.maxresURL = maxresURL;
        } catch (error) {
            throw new Error("Product format incorrect | model:Product");
        }
    }

    get sizeAvailable(){
        return [36,37,38,39,40,41];
    }

}