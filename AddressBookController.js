//constants
import {ContactPersonData} from './AddressBook2.js'
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const addressBookArray=new Array();
const prompt=require('prompt-sync')();
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
//count person by city or state
let countByCity=()=>{
    let userCityName=prompt("Enter city name: ");
    let countContactByCity=addressBookArray.filter(contact=>contact.city==userCityName).reduce(contacts=>contacts+1,0);
    console.log("Contacts in city: "+userCityName+" are: "+countContactByCity);
}
let countByState=()=>{
    let userStateName=prompt("Enter state name: ");
    let countContactByState=addressBookArray.filter(contact=>contact.city==userStateName).reduce(contacts=>contacts+1,0);
    console.log("Contacts in city: "+userStateName+" are: "+countContactByState);
}
//sort person by name
let sortContactByName=()=>{
    return addressBookArray.sort((a,b)=>{
        return ((a.firstName<b.firstName)?-1:1)
    });
}
//sort person by city
let sortContactByCity=()=>{
    return addressBookArray.sort((a,b)=>{
        return ((a.city<b.city)?-1:1)
    });
}
//sort person by state
let sortContactByState=()=>{
    return addressBookArray.sort((a,b)=>{
        return ((a.state<b.state)?-1:1)
    });
}
//sort person by zip
let sortContactByZip=()=>{
    return addressBookArray.sort((a,b)=>{
        return ((a.zip<b.zip)?-1:1)
    });
}

export{addressBookArray,addContactsToAddressBook,viewContacts,editContact,deletContact,viewContactByCity,viewContactByState,searchContactInCity,searchContactInState,findNumberOfContacts, countByCity,countByState,sortContactByCity,sortContactByName,sortContactByState,sortContactByZip}