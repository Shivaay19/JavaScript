let user_One = {
    username : "Shivaay",
    age : 22,
    email : "shivaay@champ.hotmail",
    city : "Lucknow",
    state : "Uttar Pradesh",
    isMale : true,
    "isBatman" : true,     //by default all the keys are also stored as a string
}

console.log([typeof(user_One.age), typeof(user_One.isMale), typeof(user_One.isBatman)]);
console.log(user_One.email);
console.log(user_One["email"]);      //another method to access the value of the respective key
console.log(user_One["isBatman"]);   //cannot be accessed via dot method since the key is a string

user_One.city = "Chennai";    //updation
console.log(user_One);

Object.freeze(user_One);   //prevents the user from further updating the Object

user_One.age = 23;     //won't throw an error but also won't allow the change 
console.log(user_One.age);

let user_Two = {
    username : "Lallu",
    address : {      //nested object
        city : "Varanasi",
        state : "Uttar Pradesh",
        country : "India",
    },
    age : 22,
}

console.log(user_Two?.address?.city);   //? used for optional chaining
console.log(user_Two.address.state);

//The Optional Chaining operator provides a safe way to access nested object properties 
//without explicitly checking if each intermediate property exists.
//If any part of the chain is null or undefined, the entire expression short-circuits and evaluates to undefined 
//instead of throwing a TypeError.

let merged_User1 = {user_One,user_Two};    //merges object inside object
console.log(merged_User1);

let merged_User2 = Object.assign({}, user_One, user_Two);   //first parameter is the target object, rest all are source object
console.log(merged_User2);     //assign method overwrites the common key values

let merged_User3 = {...user_One, ...user_Two};    //spread operator 
console.log(merged_User3);     //spread operator method also overwrites the common key values

const users = [
    {
        userID : 1,
        email : "one@hotmail.com"
    },
    {
        userID : 2,
        email : "two@hotmail.com"
    },
    {
        userID : 3,
        email : "three@hotmail.com"
    }
]
//array of objects

console.table([users[0].email, users[1].email, users[2].email]);

console.log(user_One.hasOwnProperty("city"));   //returns boolean value based on the availability of the asked property

console.log(Object.keys(user_One));       //lists all the keys
console.log(Object.values(user_One));     //lists all the values
console.log(Object.entries(user_One));    //lists all the key-value pairs
//return type of all the three above methods is an array

const {username : user} = user_One;    //destructuring the object
console.log(user);    //we can user instead of user_One.username now
