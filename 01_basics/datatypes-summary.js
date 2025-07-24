//  primitive

// 7 types : String, Number, Boolean, nul, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345657869504920



// Reference type(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dogeshbhai"]
let myobj = {
    name: "swaraj",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

console.log(typeof bigNumber);
console.log(typeof outsideTemp);


// typeof 
//  undefined => undefined
//  Null => object
// Boolean => boolean
// Number => number
// String => string


// +++++++++++++++++++++++++++++

// memory 2 types
// Stack (primitive), Heap (non-primitive)

let myGoodname = "swaraj"
let anothername = myGoodname
anothername = "sj"
console.log(myGoodname)
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo =  userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);