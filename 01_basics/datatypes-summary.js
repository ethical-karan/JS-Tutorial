//  Primitive


// ye sab jitna bhi primitive datatype hota hai voh Call by Value hote hai( mtlb ki jab bhi hum inki value ko kisi variable me assign karte hai to voh uski copy ban jati hai aur original value change nahi hota hai)

// 7 Types :String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = false         // js is statically typed language mtlb ki hum variable ko declare karte waqt uska datatye define nhi karte hai 
const scoreValue = 343.4

const isLoggedIn = true
const outsideTemp = null
let userEmail;               // undefined

const id = Symbol("123")
const anotherId = Symbol(123)  // unique value

console.log(id === anotherId);

// const bigNumber = 28374827348873984789n



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];         // ye hai array ka example

let myObj = {
    name: "karan",                                      // ye hai Objects ka example
    age: 19,
}

const myFunction = function() {
    console.log("Hello World");                         // ye Function ka example hai
}

console.log(typeof heros);



// *********************************************************************************************


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "mrpcdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);                     // Stack ke copy ke andar value change hota hai, original value ke ander nhi
console.log(anothername);               

let userOne = {
    email:"user@google.com",
    upi :"user@ybl"
}

let userTwo = userOne

userTwo.email = "karan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);   


let kaliLinx = {
    email: "kali@google.com",
    upi: "kali@ybl"
}
console.log(kaliLinux);