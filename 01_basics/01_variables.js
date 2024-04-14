const accountId = 144553
let accountEmail="manav@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId=2 //not allowed
accountEmail="mm@gg.com"
accountPassword="6789"
accountCity="Chandigarh"
console.log(accountId); 
console.log(accountEmail); 
console.log(accountPassword);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])