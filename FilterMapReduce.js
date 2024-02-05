// // forEach() doesn't return anything.

// const code = ["js","cpp","java"]

// const val = code.forEach((item) => {
//    return item;
// })

// console.log(val); ///undefined

// +++++++++++++ FILTER +++++++++++
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
    { name: "a", genre:"abc" },
    { name: "b", genre:"abc" },
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