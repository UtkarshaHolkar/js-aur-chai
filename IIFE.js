//  Immediately Invoked Function Expression

//  This is usd when we want to invoke our function immediately, like for example when we need to connect our application with the database as soon as the application starts so in case we will use iife.

// Secondly hum isse waha use krte h jb child function me chize global chizo ke karan jo ki parent function m he usse dikkat de toh hum yaha bhi iife use krke child function ko globally pollute hone se bacha skte h

// syntax -:-:-:- (functionDefinition)(calledForExecution)
//  here two brackets are used one for define function, and another for calling the function
// we need to wrap the function definition also in a "()"

// Syntax for iife --->

// (function abc(){
//      console.log("first");
// })()

//If you do not put semicolon in that iife then the compiler will not be able to know when to stop and thats why this second iife will not execute and it will throw an error: 

// This named iife because this iife has its name i.e abc
(function abc(){
    console.log("first");
})(); // semicolon is mandator to run next iife.

 // This unnamed iife because this iife has not any name
(()=>{
     console.log("second");
})();

// if you want to pass parameter/something in this :-

((name)=>{
     console.log(`Name: ${name}`);
})("utk");