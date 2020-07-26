export default class Client {
    name:String;
    email:String; 
    phone: String;
    address: String;
    avatarImage: String;

    
    constructor(
        name:String,
        email: String,
        phone: String,
        address: String,
        avatarImage: String
    ){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.avatarImage = avatarImage;
    }
}