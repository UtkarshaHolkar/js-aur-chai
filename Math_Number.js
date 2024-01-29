//------------ variable
const score = 400
console.log(score);

//------------ object variable
const newscore = new Number(100);
console.log(newscore);

// ------------ methods

console.log(newscore.toString().length());
// --------------for precise value 
console.log(newscore.toFixed(2));

// ------------------ Precision takes upto 3 digit values, othwer if it converts in (e)

const othernum = 123.896;
console.log(othernum.toPrecision(3));
console.log(othernum.toPrecision(2));

const othernum2 = 23.896;
console.loh(othernum2.toPrecision(2));
console.loh(othernum2.toPrecision(1));

const hundreds = 10000000;
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

// -------------------------------MATH LIBRARY


console.log(Math);
// negative to positive
console.log(Math.abs(-4));
// round off value
console.log(Math.round(4.3));
// TOP VALUE
console.log(Math.ceil(4.3));
// bottom val
console.log(Math.floor(4.3));
//Min max
console.log(Math.min(4,3,5));
console.log(Math.max(4,3,5));

// Random b/w (0-1)
console.log(Math.random());
// b/w 0-10
console.log(Math.random()*10);
// b/w 1-10 ignoring 0;
console.log((Math.random()*10) +1);

// for having customize values in random 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);