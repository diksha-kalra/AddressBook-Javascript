//constants
const NAME_REGEX_PATTERN=RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN=RegExp('^[a-zA-z]{4,}$');
const PINCODE_REGEX_PATTERN=RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
const PHONE_NUMBER_PATTERN = RegExp('^[1-9]{2}\\s[1-9]{1}[0-9]{9}$');
const EMAIL_REGEX_PATTERN=RegExp(/[a-zA-Z0-9]+([._+-][0-9a-zA-Z])*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class ContactPersonData{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        if(!NAME_REGEX_PATTERN.test(firstName)) throw "invalid first name"
        {
            this.firstName=firstName;
        }
        if(!NAME_REGEX_PATTERN.test(lastName)) throw "invalid last name"
        {
            this.lastName=lastName;
        }
        if(!ADDRESS_REGEX_PATTERN.test(address)) throw "invalid address"
        {
            this.address=address;
        }
        if(!ADDRESS_REGEX_PATTERN.test(city)) throw "invaid city name"
        {
            this.city=city;
        }
        if(!ADDRESS_REGEX_PATTERN.test(state)) throw "invalid state name"
        {
            this.state=state;
        }
        if(!PINCODE_REGEX_PATTERN.test(zip)) throw "invalid zip code"
        {
            this.zip=zip;
        }
        if(!PHONE_NUMBER_PATTERN.test(phoneNumber)) throw "invalid phone number"
        {
            this.phoneNumber=phoneNumber;
        }
        if(!EMAIL_REGEX_PATTERN.test(email)) throw "invalid email address"
        {
            this.email=email
        } 
    }
    
    //method
    toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}

try{
    let person=new ContactPersonData("Diksha","Kalra","delhi","delhi","delhi",110019,"91 9899161947","kalra@gmail.com");
    console.log(person.toString());
}catch(e){
    console.log(e);
}