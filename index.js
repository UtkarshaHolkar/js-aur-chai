//---------------- Object destructuring------------

const course = {
    coursename : "js",
    price : "99",
    instrucor: "h",
    duration : "7 mnths"
}

// its easy syntactical way to access: 
console.log(course.duration);
//  we can access in this way but let's say we want to have it three or four times then writing this code  will be not an ease Thats why .........

const { coursename } = course; //object destructuring

// if we want to call coursename as nmae then :-
const { coursename : nmae } = course; //object destructuring
console.log(coursename);
console.log(nmae);

// in functions we use props and then access using dot operator but here also object destructuring is used mostly

// without object destructuring
const func = (props ) => {
    console.log(props.duration);
}

//using object destructuring
const func2 = ({duration})=> {
 console.log(duration);
}