let nums = [19,24,29,20,3,43];
let power_Rangers = ["SPD", "Jungle Fury", "Mystic Force"];
let colleges = new Array("University Of Lucknow", "IIT Madras");

console.log(nums[0]);
console.log(power_Rangers[2]);
console.log(colleges[1]);
console.log(colleges);

nums.push(15);      //push an element at the rear end of the array
console.log(nums);

power_Rangers.pop();     //pop an element at the rear end of the array
console.log(power_Rangers);

power_Rangers.unshift("Ninja Storm");     //push an element at the front end of the array
console.log(power_Rangers);

nums.shift();         //pop an element at the front end of the array
console.log(nums);

console.log(nums.includes(19));     //returns true or false
console.log(nums.indexOf(24));      //returns the index of the element if present else -1

const nums_String = nums.join();    //converts the array into a string
console.log(nums_String);

let sliced_nums = nums.slice(1,4);   //starting and ending index excluding the ending one
console.log(["Sliced Array: ",sliced_nums]);

let spliced_nums = nums.splice(1,3);  //starting index and the length of splice, that is, the number of elements to be deleted
console.log(["Spliced Array: ",spliced_nums]);
console.log(["Original Array after Splicing: ",nums]);   //only the elements other than spliced are left in the original array

let heroes = ["Krrish", "Batman", "Spider-Man", "Iron-Man", "Hulk"];
let villains = ["Kaal", "Penguin", "Thanos", "Bane"];

heroes.push(villains);   //returns the length of the new array
//pushes as it is whatever stuff it receives

console.log(heroes);     //appends the complete array as an element
 
heroes.pop();    //pops the villains array

let merged_Array = heroes.concat(villains);
console.log(merged_Array);

const another_Merged_Array = [...heroes, ...villains];
console.log(another_Merged_Array);

const nested_Array = [19,24,[2,5,1],64,18,[0,10],[13,[43,22,56]]];
let flatted_Array = nested_Array.flat(Infinity);     //takes the depth as argument, if not known, Infinity would work fine
console.log(flatted_Array);

console.log(Array.isArray("Shivaay"));   //returns boolean value according to the input data type whether it is an array or not
console.log(Array.from("Prakhand"));    //converts the given data object into an array,if possible

let ODI_Centuries = 51;
const test_Centuries = 30;
const t20_Centuries = 1;

console.log(Array.of(ODI_Centuries,test_Centuries,t20_Centuries));