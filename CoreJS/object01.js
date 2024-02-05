//  Two ways to create object
// literal
//  constructor

// when object is creatred by constructor themn its SINGLETON means uske jaisa srf ek hi object h
// when we declare object from literals then no singleton is created

// objects is also made by this method (this is for singleton/constructor)
// Object.create 

// object literals

const obj1 = {
     name : "hey",
       "sur name" : "shar",//To access this we cant use dot operator
     age : 234,
     grp : " 0 +ve"
}

// name , age , grp all these keys are passed as an string, means its like "name", "age", "grp", it takes this keys as string b y default

// Accessing objects can be done like: 

console.log(obj1.name);

// console.log(obj1.sur name); // we cant access in this way

console.log(obj1["name"]);  // if key is given in a string and to acces also we have to pass the key in dounle quote(as a string)

console.log(obj1["sur name"]); // this is the only way left to access

// ----------------------INTERVIEW QUESTION-------------------
// if we wanna uswe the symbol as a key in object tyhen how can we use it ?

const mysym = Symbol("key1");

const obj1 = {
         name : "hey",
           "sur name" : "shar",//To access this we cant use dot operator
         age : 234,
         grp : " 0 +ve",
         mysym  : "key1"
    }

    console.log(typeof obj1.mysym);  

    // When you do like this then this is wrong because it is taken as a string not a Symbol so if you wannt to take it as a symbol then


const mysym = Symbol("key1");

const obj1 = {
         name : "hey",
           "sur name" : "shar",//To access this we cant use dot operator
         age : 234,
         grp : " 0 +ve",
         [mysym]  : "key1"     // using square brackets
    }

    console.log(typeof obj1[mysym]);    // using square brackets

    // Using square brackets only we can use symbols a s key inside object


//  ----------------- If we want to change the value of any key --------

const obj1 = {
         name : "hey",
            "sur name" : "shar",
          grp : " 0 +ve",

    }

    obj1.name = "myName"; // In this way we can change the value of a key

    console.log(obj1);

    // And if you dont wanna allow to change the value, we can lock it

    Object.freeze(obj1); // Now we can't chnage anything and its not going to give error 

const obj1 = {
         name : "hey",
            "sur name" : "shar",
          grp : " 0 +ve",
    }

    // functions can be used as a variable in objects

    obj1.greet = function()
    {
      console.log("HIIIIIIIII");
    }
    console.log(obj1.greet)  // function execute nhi hua h sirf uska reference aayega 

    console.log(obj1.greet()) // yaha pr execute hua 

//--------------- If you want to take the key and use it in a function of object

    const obj1 = {
      name : "hey",
         "sur name" : "shar",
       grp : " 0 +ve",
 }

 obj1.greet = function(){
  console.log(`hi user ${this.name}`) // 'this' keyword refers to the same object you are referencing
 }

