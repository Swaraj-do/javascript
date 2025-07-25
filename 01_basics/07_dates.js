let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date (2025, 0, 23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // gives in ms

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// to convert in seconds

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()


newDate.toLocaleString('default', {
    weekday: "long",

})

