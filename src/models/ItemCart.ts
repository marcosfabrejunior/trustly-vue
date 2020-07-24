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


    get totalPrice() {
        return Number(this.quantity) * Number(this.product.price);
    } 

    get paymentMethods() {
        return [
            {
                name: "Online Banking",
                img: "https://s3-alpha-sig.figma.com/img/9aae/63c0/c9cb1569009ab727ce475a3e7aa2cd4d?Expires=1596412800&Signature=hILMw0shKCoVUudS~73uB6Bn7JeaKWtcTbBWiLTSBvYL8xrRTx9J4qe~8gkHGm-l18QCxmgZJfxoH6agwek-5X51fNvbfeuBcMt0aqNqfetTNdS3-97~oImrsOK5YYhW96sDTvrVQvhkI50PFFYec~EyMROSwQ9B9pjibPCtWhVHsEmaM3SH90VHIwkePCG-2vEIAKrp4SZbvUZ6KZ~izmitdraAGWXxcQzxMY6tcP9eukh0h9MvcZUkJgwzyhzCNVeedi~DgmMD~nDHiqkopgu8etYmTK7C8rYi0eoRdYWjGpScHZ28cDxEBeHXMl0WVwscZoETo4AZzPebrO~xaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                active: false
            },
            {
                name: "Card Payment",
                img: "https://s3-alpha-sig.figma.com/img/b7c5/40b5/d9b364749a6e681634f7bb1131a9423a?Expires=1596412800&Signature=I0ZpqvATgNgkZFGwc6Z~hSVtcOWnume9mE6Bks5sCchV10AhIXNdFbCf1Kmg92TRaXIOicDQxjq4sWgKQVtJrshApoPPi16O--elkUF67415eI7tokt9J3xdS2lu5mK78RGlzQGULqC-eJ0fZHxqcItMp11vC6fDqOi5mAJjI~IYiOr0fNPfPGv41I7iD7uLZ1MDKZCzxn8t7k1b7~GkVw2NtiOe8EZUumzgsKdWYvLfNxbYyjkT377~I3hK7xrzKBSHefcnxTM1ekYEGpEPGQ9klr9jc2buI1EahmG3Z~CXMXievEwGrJ1sSWuG1ZshvjL~5HJmx2gfa7tFKWZAeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                active: false
            },
            {
                name: "Apple Pay",
                img: "https://s3-alpha-sig.figma.com/img/f4d6/144b/db1f8295d368c8f90e7feabe4b60e719?Expires=1596412800&Signature=a2BIuw5Xe8zplpXJKMXDeHSC52Q-hUJh2z8x-UaKqA65rsZu9qhnljia6EDnc-rgua85Ebm89cxBM3sRTEgZC4iszTqAttzd~1RsX0Nh0jKKvgEudbHzaqJSQVc9jsnx65j9PRMSCxq5dFUcXesGpJ6Cr6LrIhzDeqyxmIhbecN~c7w~X27RXEsz7ktwfGpC0QZ2o6n01UNpi9SZrs4IpFqDbprrin14WkNUGB0TZ2K3PsBw-XdkgqOcDCJwcMAG84DOlq9aprvvSN~KQ7awvj8mHRzrS91sVSEDmpTojWepPc7Zr10-VyC0Bc3A-Up1tR-3VQJhIs9mgA0jSnLnfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                active: false
            }
        ]
    }
}