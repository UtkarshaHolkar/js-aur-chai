//  'this' keyword refers the current context value

// Context simply means values( what are hold by variables )

const user = {
     name: "U",
     myfunc:  function() {
       console.log(`name : ${this.name}`)
     }
}
user.myfunc();
user.name = "s"
user.myfunc();
// NOW here name will be 's' not 'U' because we have not hard coded the value we are using it from the current context

// -----------INTERVIEW QUESTION-----------

// 'this' scope in browser console 
//-----> this refers to 'window object'

// 'this' scope in coding environment(globally)/node environment
// -------> it refers to empty object 

// 'this' scope in function 
// -----> refers to the current context(for object )
// when we try to run this keyword in a function we get so many things 
function three(){
  console.log(this);
}

// We cant access like this in a function it only works with objects

function three2()
{
  let name = "U"
  console.log(this.name); // output - undefined 
}

// both functions cant access like this 
const three = function()
{
  let name = "U"
  console.log(this.name); // output - undefined 
}

