//  Logic control / control flow

// all the code should not be run at a time, means it should be in sequence what should run first and then what should run after that , so this is done by control flow

// 1---- if else

if(true){ // conditions are checked here

}


//  In switch case without break all the cases will execute except the default case :-

// true and false are strictly true/false values but truthy and falsy values are assumed to be true or false:

// truthy values
// "0" , 'false'/"false", " " //space agr h quotes, [], {}, function(){}

// falsy values
// false, 0 , -0, Bigint -- 0n, "", null , undefined, NaN

// If we want to check empty array

if(myarr=== 0 ){
    console.log("array is empty");
}
// If we want to check empty object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//  Note this--->

false == 0
//true
false == ''
//true
0 == ''
//true

// Nullish coalescing operator (??) : null undefined

// it is a safety checker if there is value coming from db, then if one is null/undefined and another value then another value will be assigned

let val1;
val1 = 5 ?? 10 // val1 = 5
val1 = null ?? 10   // val1 = 10
val1 = undefined ?? 10   // val1 = 10
val1 = null ?? 10 ?? 24  // val1 = 10

console.log(val1);

// Ternary operator

condition ? true : false

