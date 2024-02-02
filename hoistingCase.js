// ++++++++++++++Case of Hoisting in functions: ++++++++++++++++++++++++++

// functions are declared in two ways :

//+++++++++++ 1st way

abc(3); // Hoisting is done 
function abc(num){
    return num+1; 
}

//+++++++++++ 2nd way

// here functions are declared as a expression because, a variable holding a function

abc2(3); // Hoisting cant be done in this case
const abc2 = function(num){
    return num+1;
}