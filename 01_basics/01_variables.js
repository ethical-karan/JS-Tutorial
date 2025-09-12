const accountId = 144553
let accountEmail = "karan@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2     not allowed
accountEmail = "hsc@s.com"
accountPassword = "23223424"
accountCity = "Bengaluru"

let accountState;
let a;
let b = 12;
b = 34;

console.log(accountId)

/*
Prefer not to use var
becuase of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState, a, b])