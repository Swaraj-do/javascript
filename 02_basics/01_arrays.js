// Array

const myarr = [1, 2, 3, 4 ,5, 6, 7]
const myHeros = ["superman", "ironman"]

const myArr2 = new Array(1,2,3,4)

console.log(myarr[0]);

// Array methods


// myarr.push(8) // insert in last
// console.log(myarr);

// myarr.pop()   // remove from last

myarr.unshift(9) // insert in first
myarr.shift() // remove from first
console.log(myarr);


const newArr = myarr.join()
console.log(typeof newArr);


// slice, splice

console.log("A", myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B",myarr);

const myn2 = myarr.splice(1,3)
console.log("C", myarr);
console.log(myn2);
