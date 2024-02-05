
//+++++++++++++++ Arrow function +++++++++++++

// this can't be used inside arrow function
const abc = () => {
    let name = "s";
    console.log(this)//this will give empty object
    console.log(this.name) // undefined
}

//  There is another way also to declare arrow function  (Implicit return) : we need not to write curly brackets here, we can simply put it onto one line code

// if written in curly braces we need to write the return keyword but if we are not using it then no need to write return keyword and also if using small brackets thyen also no need to write the return keyword

const addTwo = (num1, num2) => num1 + num2

// alternate way to write it :-

// const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));

// if you want to add objects in this function then ->

// we need to pass it in small brackets, coz it will be undefined if we will not use "()"
// const addfunc = () => {name: "s"} //undefined

const addfunc = () => ({name: "s"})