const accountId = 144563
let accountEmail = "swaraj@google.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"

// accountId= 2 // not allowed

accountEmail = "sc@sc.com"
accountPassword = "212121"
accountCity = "Delhi"
let accountState;


console.log(accountId);

/*
Prefer not to ise var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])