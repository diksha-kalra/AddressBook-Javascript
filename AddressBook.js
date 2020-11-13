import {addressBookArray,addContactsToAddressBook,viewContacts,editContact,deletContact,viewContactByCity,viewContactByState,searchContactInCity,searchContactInState,findNumberOfContacts, countByCity,countByState,sortContactByCity,sortContactByName,sortContactByState,sortContactByZip} from './AddressBookController.js';
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const prompt=require('prompt-sync')();
const NAME_REGEX_PATTERN=RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN=RegExp('^[a-zA-z]{4,}$');
const PINCODE_REGEX_PATTERN=RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
const PHONE_NUMBER_PATTERN = RegExp('^[1-9]{2}\\s[1-9]{1}[0-9]{9}$');
const EMAIL_REGEX_PATTERN=RegExp(/[a-zA-Z0-9]+([._+-][0-9a-zA-Z])*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
class ContactPersonData{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email
    }
    get firstName(){return this._firstName;}
    set firstName(firstName){
        if(!NAME_REGEX_PATTERN.test(firstName)) throw "invalid first name"
        {
        this._firstName=firstName; 
        }
    }
    get lastName(){return this._lastName;}
    set lastName(lastName){
        if(!NAME_REGEX_PATTERN.test(lastName)) throw "invalid last name"
        {
            this._lastName=lastName;
        }
    }
    get address(){return this._address;}
    set address(address){
        if(!ADDRESS_REGEX_PATTERN.test(address)) throw "invalid address"
        {
            this._address=address;
        }
    }
    get city(){return this._city;}
    set city(city){
        if(!ADDRESS_REGEX_PATTERN.test(city)) throw "invaid city name"
        {
            this._city=city;
        }
    }
    get state(){return this._state=state;}
    set state(state){
        if(!ADDRESS_REGEX_PATTERN.test(state)) throw "invalid state name"
        {
            this._state=state;
        }
    }
    get zip(){return this._zip=zip;}
    set zip(zip){
        if(!PINCODE_REGEX_PATTERN.test(zip)) throw "invalid zip code"
        {
            this._zip=zip;
        }
    }
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){
        if(!PHONE_NUMBER_PATTERN.test(phoneNumber)) throw "invalid phone number"
        {
            this._phoneNumber=phoneNumber;
        }
    }   
    get email(){return this._email;}
    set email(email){
        if(!EMAIL_REGEX_PATTERN.test(email)) throw "invalid email address"
        {
            this._email=email;
        }
    }
    //method
    toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}

console.log("Welcome To AddressBook Program");
let userInput=0;
//calling add to addressbook method
do{ 
    console.log("Enter 1-Add Contact\n2-Edit Contact\n3-View Contacts\n4-Delete Contact");
    console.log("5-Number Of Contacts\n6-search contact by city\n7-search contact by state\n8-view contact by city");
    console.log("9 view contact by state\n10- count contact by city or state\n11-Sort by name");
    console.log("12-Sort by city\n13-state\n14-zip\n 0-Exit");
    userInput=prompt("Enter Option: ");
    if(userInput==1){
        addContactsToAddressBook();
    }if(userInput==2){
        editContact();
    }if(userInput==3){
        viewContacts();
    }if(userInput==4){
        let status=deletContact();
        console.log("Contact Deleted: "+status);
    }if(userInput==5){
        let count=findNumberOfContacts();
        console.log("Number of contacts in address book are: "+count);
    }if(userInput==6){
        searchContactInCity();   
    }if(userInput==7){
        searchContactInState(); 
    }if(userInput==8){
        viewContactByCity();
    }if(userInput==9){
        viewContactByState();
    }if(userInput==10){
        countByCity();
        countByState();
    }if(userInput==11){
        let sortByName=sortContactByName();
        console.log(sortByName);
    }if(userInput==12){
        let sortByCity=sortContactByCity();
        console.log(sortByCity);
    }if(userInput==13){
        let sortByState=sortContactByState();
        console.log(sortByState);
    }if(userInput==14){
        let sortByZip=sortContactByZip();
        console.log(sortByZip);
    }
}while(userInput!=0);
export{ContactPersonData}