const NAME_REGEX_PATTERN=RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN=RegExp('^[a-zA-z]{4,}$');
const PINCODE_REGEX_PATTERN=RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
const PHONE_NUMBER_PATTERN = RegExp('^[1-9]{2}\\s[1-9]{1}[0-9]{9}$');
const EMAIL_REGEX_PATTERN=RegExp(/[a-zA-Z0-9]+([._+-][0-9a-zA-Z])*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const prompt=require('prompt-sync')();
const addressBookArray=new Array();

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
    set firstName(firstName){this._firstName=firstName; }
    //method
    toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}

//add contacts to address book
let addContactsToAddressBook=()=>{
    let userFirstName=prompt("Enter First Name: ");
    let userLastName=prompt("Enter Last Name: ");
    if(addressBookArray.find((contact)=>(contact.firstName+contact.lastName)==(userFirstName+userLastName)))
    {   
        console.log("Name already present in address book")
        return;
    }
    let userAddress=prompt("Enter Address: ");
    let userCity=prompt("Enter City Name: ");
    let userState=prompt("Enter State Name: ");
    let userZip=prompt("Enter Zip Code: ");
    let userPhoneNumber=prompt("Enter Phone Number: ");
    let userEmailId=prompt("Enter Email id: ");
    try{
        let person=new ContactPersonData(userFirstName,userLastName,userAddress,userCity,userState,userZip,userPhoneNumber,userEmailId);
        addressBookArray.push(person);
        console.log("Contact Added: ");
    }catch(e){
        console.log(e);
    }
}

//view contacts by name
let viewContacts=()=>{
    console.log(addressBookArray+"\n");
}
//edit contact
let editContact=()=>{
    if(addressBookArray.length==0){
            console.log("No contacts");
            return;
    }
    let userName=prompt("Enter the name whose contact you want to edit: ");
    let userData=prompt("Enter new name: ");
    let found=addressBookArray.find((contact)=>contact.firstName==userName);
    if(found==undefined){
        console.log("No such contact");
        return;
    }
    else{
        addressBookArray.find((contact)=>contact.firstName==userName).firstName=userData;
    }    
    }
//delete contact
let deletContact=()=>{
    if(addressBookArray.length==0){
        console.log("No contacts");
        return;
    }   
    let userName=prompt("Enter contact name you want to delete: ");
    let found=addressBookArray.find((contact)=>contact.firstName==userName);
    if(found==undefined){
        return "No such contact";
    }else{
        addressBookArray=addressBookArray.filter((contacts)=>contacts.firstName!=userName);
        return true;
    }
}
//get number of contacts
let findNumberOfContacts=()=>{
    let count=addressBookArray.reduce(contacts=>contacts+1,0);
    return count;
}
//serach contacts by city
let searchContactInCity=()=>{
    let userCityName=prompt("Enter city name: ");
    let userName=prompt("Enter name: ");
    let searchcontactByCity=addressBookArray.filter(contact=>contact.city==userCityName).find(contact=>contact.firstName==userName);
    console.log("Contact found in given city:"+searchcontactByCity);
}
let searchContactInState=()=>{
    let userStateName=prompt("Enter state name: ");
    let userName=prompt("Enter name: ");
    let serachcontactByState=addressBookArray.filter(contact=>contact.state==userStateName).find(contact=>contact.firstName==userName);
    console.log("Contact found in given state: ",+serachcontactByState);
}
//view person by city
let viewContactByCity=()=>{
    result = addressBookArray.reduce((h, contact) => Object.assign(h, { [contact.city]:( h[contact.city] || [] ).concat({firstName: contact.firstName, lastNam: contact.lastName, address: contact.address,
             city: contact.city,state: contact.state,phoneNumber: contact.phoneNumber,email: contact.email}) }), {});
    console.log(JSON.stringify(result));
}
let viewContactByState=()=>{
    result = addressBookArray.reduce((h, contact) => Object.assign(h, { [contact.state]:( h[contact.state] || [] ).concat({firstName: contact.firstName, lastNam: contact.lastName, address: contact.address,
             city: contact.city,state: contact.state,phoneNumber: contact.phoneNumber,email: contact.email}) }), {});
    console.log(JSON.stringify(result));
}

console.log("Welcome To AddressBook Program");
let userInput=0;
//calling add to addressbook method
do{ 
    console.log("Enter 1-Add Contact 2-Edit Contact 3-View Contacts 4-Delete Contact");
    console.log("5-Number Of Contacts 6-search contact by city 7-search contact by state 8-view contact by city 9 view contact by state 0-Exit");
    userInput=prompt("Enter Option: ");
    if(userInput==1){
        addContactsToAddressBook();
    }
    if(userInput==2){
        editContact();
    }
    if(userInput==3){
        viewContacts();
    }
    if(userInput==4){
        let status=deletContact();
        console.log("Contact Deleted: "+status);
    }
    if(userInput==5){
        let count=findNumberOfContacts();
        console.log("Number of contacts in address book are: "+count);
    }
    if(userInput==6){
        searchContactInCity();   
    }
    if(userInput==7){
        searchContactInState(); 
    }
    if(userInput==8){
        viewContactByCity();
    }if(userInput==9){
        viewContactByState();
    }
}while(userInput!=0);


