//------------- PROTOTYPE---------------

// javascript k jo default behaviour h vo h prototypal behaviour (it means js kbhi b haar nhi maanti h,, jo chiz aap dhundh rhe ho vo js parent m access krti h fir grandparents ko access krta h fir grand grand parents ko access krti h jb tk null nhi mil jata js usko search krti h or issi behavior ko prototype behaviour kehte h...)

// new, this , classes, prototype inheritance sb kuch prototype se hi aata h

// jb browser console m jakr aap ek array bnate ho or usko access krte ho toh vaha prototype aata h

// array ---> object--->null
//sbse pehle array prototype milta h uske baad m object prototype milta h uske baad null milta h 

// same goes with string
// string ---> object--->null

// yaha s hum keh skte h ki hr chiz js m ek object h, jo bhi chize object k pass h vo sb array k pass b h or vahi sb string k pass bhi h

// and function k kya scene h kya vo bhi object  h ??

function Name(num){
    return num*5
}
Name(2);
Name.power = 2

console.log(Name(7)); // 35

// kta ye object ki tarah ki dot operator s access kiya ja skta h???
console.log(Name.power); //2
console.log(Name.prototype); // {}

// yaha se smjh aata h ki function ek function bhi h or ek object bhi

// function ---> object ---> null

function createUser(username, score){
     this.username = username
     this.score = score
}

//--------WATCH THIS VIDEOSSSS-----------
// 
// WHEN NEEDED AND COMPLETE THIS WHEN YOU REALLY WANT TO SWITCH FOR SENIOR LEVEL DEVELOPER......