let string1 = "Hello";
let string2 = "Shivaay";

console.log(string1 + " " + string2);    //Concatenation

let age = 22;
let stringAge = String(age);
let booleanAge = Boolean(age);      //Any non-zero value corresponds to true whereas 0 and Null corresponds to false

console.log([typeof(age),typeof(stringAge),stringAge,typeof(booleanAge),booleanAge]);

console.log("1" + 2 + 2);    //122
console.log(1 + 2 + "2");    //32

let username = "Shivaay";
let number_Username = Number(username);   //NaN

console.table([username,typeof(username),number_Username,typeof(number_Username)]);

console.log(['1' > 0, null == 0, '1' == 1, '5' === 5]);

//use === for strict type checking

console.log([Boolean(""), Number(true), Number(+false), Boolean(null)]);
