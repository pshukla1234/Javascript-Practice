const name = "Pranjal Shukla"
const accountId = 1234

// earlier way to write print strings

// console.log(name + accountId + "ICICI BANK")
// new modern way to print string through String Interpolation => in the concept of String
// interpolation we use place holder where we can keep the value by making the placeholder 
// which start with ${} sign where we can fill any value defined in the code

console.log(`Hey my name is ${name} and my account is in ICO which has account id ${accountId} `)


const newName = new String("Helloworld")

console.log(newName.length);
console.log(newName.charAt(3));
console.log(newName.indexOf("w"));

const newSubstring = newName.substring(0,5)
console.log(newSubstring);

const newSlicestring = newName.slice(5,10)
console.log(newSlicestring);


const trimString = new String("         Pranjal          ")
console.log(trimString.trim());

const bigString = new String("my-name-is-pranjal-shukla-I-live-in-xyz-city");
console.log(bigString.includes("pranjal"));
console.log(bigString.split("-"));
console.log(bigString.replace("pranjal","aman"));





