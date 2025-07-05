let username = "Shivaay";
let age = 22;

console.log(`My name is ${username} and I am ${age} years old`);

let city = new String("Lucknow");

console.log([city[0],city[1],city[2],city[3],city[4],city[5],city[6]]);
console.log(city.length);
console.log(city.toUpperCase());   //changes in the copy of the string
console.log(city);     //original stirng is still in lowercase

console.log(city.charAt(3));     //character at given index
console.log(city.indexOf('o'));

let newString = city.substring(0,4);   //starting and ending index where ending index is exclusive
console.log(newString);

let url = "https://www.lkouniv/Student%20Login";

console.log(url.replace("%20","-"));
console.log(url);
console.log(url.split('/'));
console.log(url.includes("lko"));
console.log(url.includes("sign"));