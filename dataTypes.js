let age = 22;              //number
let username = "Shivaay";  //string
let cgpa = 8.42;           //number
let isAdult = true;        //boolean
let income = null;         //object
let spouseName;            //undefined
let bigNumber = 900719925471n;    //bigInt
let id1 = Symbol("Zephyrus");     //symbol
let id2 = Symbol("Zephyrus");     //symbol


console.table([typeof(age),typeof(username),typeof(cgpa),typeof(isAdult),typeof(income),typeof(spouseName)]);
console.log(typeof(bigNumber));
console.log([id1,id2,id1 == id2]);   //even for the same stuff, Symbol assigns a Unique ID