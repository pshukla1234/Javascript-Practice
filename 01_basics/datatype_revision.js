// Primitive data type [ Call by value]
// there are 7 types of primmitive data types
/*

String
null
Number
Boolean
Undefined
Symbol
BigInt
*/

const num1 = Symbol('123')
const num2 = Symbol('123')
console.log(num1 === num2)

// Second type of data type - Reference type [non primitive]

// Array , Object , Functions

// Array 

const heros = ["superman","Arrow","batman"]
console.log(heros)

// object

let myobj = {

    name:"Pranjal Shukla",
    age: 20
}

console.log(myobj)

// functions

const myfunction = function(){
    console.log("Hello to function")
}



// Stack memory is used for primitive data type which gives the copy of value like example

let user1 = "Aman Singh" //1st user
let user2 = user1 // i.e user 2 is also have same name Aman singh
user2 = "Shashank Singh"

// when printed their results

console.log(user1);
console.log(user2);

// Heap memory is user for non primmitive data types which gives the exact reference of the values i.e directly value could be changes 
// lets understand with the examples

let Account1 = {

    number: 12345,
    name: "user1",
    id:"#1234"
    
}
let Account2 = Account1
Account2.number = 123456;
Account2.name = "Userunwanted"
Account2.id = "#2322"

// now see in previous written Account1 object details are changed into Account2 , we can verify
// this by printing it Account 1


console.log(Account1);

// { number: 123456, name: 'Userunwanted', id: '#2322' } now account 1 details are changed to account 2

