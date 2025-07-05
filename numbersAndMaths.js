const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;

console.table([biggestNum,smallestNum,infiniteNum,negInfiniteNum]);


//0b prefix for binary number
//0o prefix for octal number
//0x prefix for hexadecimal number
console.table([0b01110, 0o4550, 0xAC119]);

let income = 1000000;
console.log([income, income.toLocaleString(), income.toLocaleString("en-IN")]);
console.log(income.toString().length);

let distance = 43.2781;
console.log(distance.toFixed(2));   //upto 2 decimal values

let marks = 73.98;
console.log(marks.toPrecision(2));
console.log([Math.floor(marks), Math.ceil(marks), Math.round(marks)]);
console.log([Math.abs(-10), Math.pow(4,3)]);
console.log(Math.max(19,24,2003,2,5));
console.log(Math.min(19,24,2003,2,5));


console.log(Math.random());     //generates a random number between 0 to 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const lower_Boundary = 10;
const upper_Boundary = 20;

//generates a random number between 10 to 20
console.log(Math.floor(Math.random() * (upper_Boundary - lower_Boundary + 1)) + lower_Boundary);