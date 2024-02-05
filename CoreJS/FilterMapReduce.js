// // forEach() doesn't return anything.

// const code = ["js","cpp","java"]

// const val = code.forEach((item) => {
//    return item;
// })

// console.log(val); ///undefined

// ++++++++++++++++ FILTER +++++++++++++++++
// filter method returbns the values also.

// filter() will have a callback where we need to pass something, and all the values are accessed in this, but ek condition pass krni hoti h, or jo bhi values uss condition ko satisfy krngi vo vo values filter () return kr dega

const myNum = [1,2,3,4,5,6,7]

const val = myNum.filter((num)=> num>4)
console.log(val);
// output [5,6,7]

// if we are using curly braces in call back then we have to remeber to use return keyword also otherwiuse it will return an empty array

const val1 = myNum.filter((num)=> { num>4 } )
// output []

const val2 = myNum.filter((num)=>
 { return num>4 }
  )
// output [5,6,7]

// Simply means agr aap scope open krte h i.e {} toh aapko retun keyword use krna pdhega otherwise nhi krte ho toh nhi use krke bhi ho jayega 

// if you want to do this with foreach then :-

const newNum = [];

myNum.forEach((num)=> {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum); //output -- 5,6,7 

const books = [
    { 
        name: "a",
        genre:"abc" 
    },
    { 
        name: "b",
        genre:"abc" },
    {
        name: "c",
        genre:"def"
    },
    {
        name: "d",
        genre:"def"
    },
    {
        name: "e",
        genre:"abc"
    }
]

const values = books.filter((bk)=> bk.genre === "def");
console.log(values);

//++++++++++++++++++ MAP ++++++++++++++++++++++++
// This automatically returns the value.

const numb = [1,2, 4, 6];

 const vals = numb.map((num) => num +10)
 console.log(vals);
// ------- OR WE CAN DO:
 const val7 = numb.map((num) =>{return num +10})
 console.log(val7);

//  CHAINING------------------->>>>>>>>>>

// yaha pr jb bhi chaining hgi toh jo bhi previous method return kregi vahi next wali method k liye value hgi or uspr hi fir vo kaam hga jo next h

const mynumb = numb.map((num) => num*2)
                   .map((num) => num +24)
                   .filter((num) => num >12 )

// yaha pr phle map() m sari values m 2 * ho jayega and then ek nayi array hgi jisme ye sari values hongi and then ye nayi value wali array dusre map() m pass hgi fir un sb new values m 24 + hoga and then filter method m wps nayi wali array pass hogi jisme 24 + kra hua hga annd then filter method m hum naya result dnge jo values 12 se badi hongi

// +++++++++++++++ REDUCE +++++++++++++++++

// hum ek initial value lenge, reduce method m vahi wps callback function, yaha pr ek accumulator milti h or ek cuurentValue milti h,  Current value jo current value chlrhi h vahi and accumulator mtlb ek khali empty variable aapko diya jata h, isme hum initial value assign krte h, or initial value jb pehli baar loop chlega i.e reduce() toh accumulator m phle ye initial value assign hogi, uske baad accumulator m naya updated value add hga jo bhi rhega operation k baad.

const myNumbs = [1,2,3];

const Total = myNumbs.reduce(function( acc, currVal ){
    console.log(`acc : ${acc} and acrrval :${currVal}`);
    return acc + currVal}, 0)

    // With fat arrrow function

const Total1 = myNumbs.reduce(( acc, currVal )=> acc+currVal , 0)

console.log(Total1);

const cart = [
    {
        name: "js",
        price: 3000
    },
    {
        name: "cpp",
        price: 3400
    },
    {
        name: "react",
        price: 7000
    },
    {
        name: "vue",
        price: 2000
    },
]

// task is to add all the prices of this objects

const Tot = cart.reduce((acc, item) => acc + item.price , 0)

console.log(Tot);