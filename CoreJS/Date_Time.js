
let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// 0 se starrtt hoti h months
let mycreated = new Date(2023, 0, 23);
console.log(mycreated.toString);

let mycreated2 = new Date("01-14-2023");

// timeStamp

let mytimestamp = Date.now();
console.log(mytimestamp)
console.log(mytimestamp.getTime());
// to milli seconds 
// Interview question
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay);
console.log(newDate.getMonth);
console.log(newDate.getHours);

// we define object here as a parameter. we can pass many parameters 
newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})