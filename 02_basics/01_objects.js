const Identitycard = new Object({name:"Pranjal Shukla",classroom:"Section A",Fname:"NS Shukla"})
console.log(Identitycard.name);
console.log(Identitycard.Fname)
console.log(Identitycard.classroom)

console.log(Object.keys(Identitycard))
console.log(Object.values(Identitycard))


const userRegistration = {
    uName:"Aman Singh",
    gender:"male",
    mobileNumber:323233323333,
    Address:"near to section area Hyderabad"
}

// merging of two objects 

const mergedObjects = {...Identitycard,...userRegistration}. //flat method is used to merge two objects
console.log(mergedObjects)



