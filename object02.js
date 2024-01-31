//  OBJECT SUNGLETON OR USING CONSTRUCTOR

// both are objects but using new keyword its a singleton object
const obj1 = {}     // literal object
const obj2 = new Object()   // singleton object

// otherwise there is no differemce in them

//  ------------NESTING OF OBJECTS(object inside objects)------------------

const obj3 = {
    email: "hi@gmail.com",
    fullname :{
       userfullname  : {
        firstname  :" utk ",
        lastname : " sha ",
       }
    }
}

// Accesing values 

console.log(obj3.fullname.userfullname.firstname);

// If in case fullname doesnt exist then it will protect us

console.log(obj3.fullname?.userfullname.firstname);

// ===================  COMBINING  OBJECTSS ====================== 

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}

const obj3 = { obj1, obj2}
console.log(obj3);

//  In this situation again the same problem we havent concationate the vlues of the objects it is combined like objects having two diffret objects

const obj4 = Object.assign( {}, obj1 , obj2);

// for combing them we will use this. It will return a modified object after combing them in a new object 

// --------------ONE MORE WAY ---------------------------
//  using spread operator


const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}

const obj3 = {...obj1, ...obj2}
console.log(obj3)

// Whenever data comes from database it usually comes in format of  (array of objects)

const users = [
    {
        id :1,
        email : "her@gmail.com"
    },
    {
        id :2,
        email : "him@gmail.com"
    },
    {
        id :3,
        email : "his@gmail.com"
    }
]

// If let say we have to loop from this array (using map) or we have to print  a value

console.log(users[1].email) // This will print the first object's email from the array

//-----------------------------Important concept-------------------------

const obj1 = {
    id: 1,
    class: "3",
    name : "hier",
    grp : "o +ve"
}

// Object.keys will return all the keys of object inn an array
console.log(Object.keys(obj1));
// OUTPUT-  [ 'id', 'class', 'name', 'grp' ]

// Object.values will return all the values of object inn an array
console.log(Object.values(obj1));
// OUTPUT-  [ 1, '3', 'hier', 'o +ve' ]

// Object.entris will return all the key & values of object inn an array (array inside array)

console.log(Object.entries(obj1));
// OUTPUT-  [
//   [ 'id', 1 ],
//   [ 'class', '3' ],
//   [ 'name', 'hier' ],
//   [ 'grp', 'o +ve' ]
// ]

//  if we want to know is there any property named " nameOftheProperty", it will return true or flase
console.log(obj1.hasOwnProperty("grp")); //true
console.log(obj1.hasOwnProperty("grpppp")); //false