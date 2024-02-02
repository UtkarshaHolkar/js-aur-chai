//-----------------------(...) REST / SPREAD OPERATOR----------------------------

//  this spread and rest operator are (...) but used differently according to their use cases

function add1(num){
    return num;
}
console.log(add1(2, 4, 6, 8 ));

// output --- 2

// What If we want all the numbers ??? then we wil use rest operator

function add2(...num){
    return num;
}
console.log(add2(2, 4, 6, 8 ));

// output --- [2, 4, 6, 8]

//  ------INTERVIEW QUESTION -----------------


function add3(val1, val2, ...num){
    return num;
}
console.log(add3(2, 4, 6, 8 ));

// Output -- [ 6, 8]
// Because 2 is stored in val1 and 4 is stored in var2 and the rest are in rest operator 


// ---------Passing objects in function &handling is values  -----------

const user = {
    username : "hi",
    age: "45"
}

function handleObject(anyObj){
    console.log(`name is ${anyObj.username} & age : ${anyObj.age}`);
}
handleObject(user);

// we can pass objects in another way also i.e :

handleObject({
    fname : "utk",
    lname : "sha"
})

// Passing arrays in function:

const myArr = [100, 200, 300];

function myfunc(getArr){
    console.log(getArr[2]);
}

myfunc(myArr);

// we can pass arrays in another way also i.e :

myfunc([3,4,5,6]);