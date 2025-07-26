// singleton
// object.create

// object literals 

const Jsuser = {
    name: "Swaraj",
    "full name": "Swaraj Mohanty",
    age: 21,
    location: "Jaipur",
    email: "sj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(Jsuser.email);
console.log(Jsuser["email"])
console.log(Jsuser["full name"]);

Jsuser.greeting = function(){
    console.log("Hello JS user");

}


Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
