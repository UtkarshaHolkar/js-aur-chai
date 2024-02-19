// object literal

const user = {
    username : "a",
    loginCount : 3,
    signedIn :true,

    getUserDetails : function(){

        console.log("got user details");
        // this keyword
        console.log(` user : ${this.username}`);
        console.log(this); //current context
    }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this);  // otp -- empty obj {}

// Constructor function --- jb hummes ek hi blue print k ek or obj bnanan ho tb wps pura code liknge iisee achha ek blue print constructor m hi define krde

// new keyword is a constructor function
// --- ek hi Object literal s hum multiple instances bana skte h 

// ye new keyword basically ek naya executional context bnane m kaam aaata h or isi ko constructor function bolte h

function User(username, loginCount){
    this.username = username;
    this.loginCount = loginCount;
     this.greeting = function(){
        console.log(`welcome ${this.username}`);
     }
    // return this (implicit define hota h ye nhi likho tb bhi kaaam vahi hoga)
}

const userOne = User("abc", 5);

// userTwo jo h vo saari ki saari values overwrite kr dega 
const userTwo = User("def" , 7)
console.log(userOne);

// isliye humme new keyword use krna pdhega

// constructor function (new) har baar aapko ek naya instance (copy) bana kr deta h jo ki kbhi b chnge krne pr original ko effect nhi krti

const userThree = new User("fc", 8);
const userFour = new User("kl", 9);

console.log(userThree);
console.log(userFour);

// step 1---jb b new keyword use krnege toh ek empty brackets / ek empty obj create hota h
// step 2---- constructor func call hota h new keyword k liye or jitne b arguments hote h vo aapko pack krke de deta h 
// step 3---- jo bhi arguments rehte h vo this keyword wale variable m inject ho jate h
//step 4 ---- yaha function m humme mil jate h

console.log(userThree.constructor);
// output -- [Function : User]
// reference aapke khud hi k baare m, khud ko refer krti h constructor property yaha pr...