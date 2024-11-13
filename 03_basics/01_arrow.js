// This file is to learn about this function which refers to realtime context of the function

// const registration = {
//     Uname:"Pranjal Shukla",
//     age:29,

//    welcomeMessage: function(){
//     console.log(`${this.Uname},Welcome to UseMe`);
//    }
// }
// registration.welcomeMessage()

// function addtwonum(num1,num2){
//     num3 = num1+num2;
//     console.log(num3);
    
// }

// addtwonum(5,10)


// const addtwonum = function(num1,num2){
//     num3 = num1+num2;
//     console.log(num3);
    
// }

// addtwonum(100,200)

const Cars ={
    "name":"Toyota",
    "price":1000000,
    message: function(){

        console.log(`${this.name} is ${this.price} Rupees only`)

    }
}
Cars.name = "Honda",
Cars.price =200000
Cars.message()

const movieName = (mName,budget)=>{

    console.log(mName,budget)

}
movieName("Venom",12000)

