export default class Client {
    name:String;
    phone: String;
    address: String;
    avatarImage: String;
    
    constructor(
        name:String,
        phone: String,
        address: String,
        avatarImage: String
    ){
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.avatarImage = avatarImage;
    }
}