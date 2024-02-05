// -------------SCOPES----------------
// Scope inside {} are called block scope

// Interview Questions :-
// Scopes (global) are different in code environment and in browser console.

// Nested Scopes
    
function one(){
    const username = "U";

    function two(){
        const name ="S";
        console.log(username);
    }

    // console.log(name); // Chote agr bado se icecream mange toh thik h but agr bade choto se ice cream maange toh bekr lgta h waise hi inner function outer function s kch bhi access kr skta h uske liye vo global scope h but outer function inner function ko access nhi kr skta (This is also called closures in JS)
    two();

}
one();

//  IF ELSE ;-

if(true){
    const name = "S";
    if(name == "S"){
        const name2 = "U";
        console.log(name + name2);
    }
    // console.log(name2); //ERROR coz we r trying to access it  out of scope
}
// console.log(name); //ERROR  coz we r trying to access it  out of scope

