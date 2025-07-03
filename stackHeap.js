let username = "Shivaay";
let inGameName = username;

inGameName = "Exorcist";     //primitve variables are stored in Stack Memory and passed as a copy

console.log([username,inGameName]);

let user_One = {
    name: "KuchiPuchi",
    age: 22,
    gender: "female"
}
let user_Two = user_One;

user_Two.age = 23;     //object is a non-primitive data type and is stored in Heap Memory and passed as reference

console.log([user_One.age, user_Two.age]);

let income = 1924;     //primitive data type stored in Stack Memory
let newIncome = income;
newIncome = 4029;

console.log([income,newIncome]);