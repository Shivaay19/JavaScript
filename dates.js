let myDate = new Date();

console.log(myDate);                         //2025-06-26T15:42:21.449Z
console.log(myDate.toISOString());           //2025-06-26T15:42:21.449Z
console.log(myDate.toLocaleString());        //6/26/2025, 9:12:21 PM
console.log(myDate.toDateString());          //Thu Jun 26 2025
console.log(myDate.toLocaleDateString());    //6/26/2025
console.log(myDate.toLocaleTimeString());    //9:13:33 PM

let newDate = new Date(2003,1,19);     //month count starts from 0

console.log(newDate.toDateString());   //Wed Feb 19 2003

let timeStamp = Date.now();    //returns the milliseconds elapsed till January 1, 1970

console.log(timeStamp);        //better for comparison
console.log(myDate.getTime());
console.log(timeStamp === myDate.getMilliseconds());