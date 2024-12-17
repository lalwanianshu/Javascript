console.log("hello world");
const accountId = 1234;
var accountEmail = "anshu@gmail.com";
let accountPassword = "2343525";
let accountCity = "Bengaluru";
let accountState;
console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

// {}=> scope
// prefer not to use var because of issue in block scope and functional scope
