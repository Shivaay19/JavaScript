function add_Numbers(number1,number2){
    return number1 + number2;
}

const result = add_Numbers(19,24);
console.log(result);

function greet(username = "Lallu"){       //default value will be Lallu if no argument is passed 
    if(username === undefined){       //(!username) can also be used
        console.log("Please Enter a Valid Username");
        return;
    }
    console.log(`Hi ${username}, glad to see you back`);
}

console.log(greet("Shivaay"));
console.log(greet());     //default value (Lallu) is used since no argument is passed

//rest operator

function cartPrice(num1){
    return num1;
}
console.log(cartPrice(2790));

function cartPrice1(...nums){
    return nums;
}
console.log(cartPrice1(2790,3010,180,4880,500));

function cartPrice2(num1,num2,...nums){
    console.log([num1,num2]);
    return nums;
}
console.log(cartPrice2(2790,3010,180,4880,500));   //num1 = 2790, num2 = 3010

function handleObject(userObject = {     //default object
    username : "Shivaay",
    mail : "champ@hotmail.com",
    city : "Lucknow"
}){
    userObject.mail = `${userObject.username}@hotmail.com`;
    if(userObject.hasOwnProperty("city")){
        userObject.city = "Chennai";
    }
    if(userObject.hasOwnProperty("age")){
        userObject.age = 22;
    }
}

const userOne = {
    username : "Prakhand",
    mail : "batman@yahoo.in",
    age : 24
}

console.log(userOne);
handleObject(userOne);     //objects and arrays are passed as reference
console.log(userOne);

let name = "Batman";
function editName(name){    //primitive variable is passed as a copy
    name = "Chamgaadad";
}

console.log(["Name before calling the Function: ",name]);
editName(name);
console.log(["Name after calling the editName Function: ",name]);   //no change in the name reflected

//in case we call this increment function before its declaration, it will result in an error
//increment(24) will throw error at this line
//the other syntax for function declaration won't throw any error even if invoked before the declaration

const increment = function(num){
    return ++num;
}
console.log(increment(19));

//arrow function

let increment1 = (num) => (++num);    //implicit return, no need of explicit return keyword
let addNums = (num1,num2) => (num1 + num2);
let subtractNums = (num1,num2) => {   //explicit return if curly braces are used
    return num1 - num2;
}
console.log([increment1(19),addNums(30,11),subtractNums(100,54)]);