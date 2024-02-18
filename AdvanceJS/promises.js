//----------------------PROMISES ------------------
    
    // ES6 m promise aya
    //define

    // promise ek object h jo represent krta h eventual completion or failure

    // it simply means jo bhi task h ab vo queue m add hogya h pr vo abhi k abhi complete nhi hoga
    
    // states - a promise is in one of the states:
    // 1. pending
    // 2. fulfilled
    // 3. rejected

    //creating a promise---- 
// promise ek callback leta h apne andar: 

// ek resolve ek reject do part hote h function k

const promise1 = new Promise(function(resolve, reject ){
    // what type of work can be done hrer??
    // 1) do an async task 
    // 2) db ko calls 
    // 3) network call
    setTimeout(() => {
        console.log('async task is completed');
        resolve() // bina iss line k .then s vo connect nhi hoga (promise consume bhi nhi hoga )
    }, 1000); 

});

// ab promise create krne k baad isko consume bhi krna pdhega -- 

// .then k sidha connection h resolve k sath

promise1.then(function(){
    console.log('promise consumed');
})


// another way to create and consume

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


// 3rd promise


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve() m hum data bhi pass kr skte h mostly hum object k form m krte h...
        resolve({username: "chai", email : "hey@example.com"})
    }, 1000);
})

 // resolve() m hum data krke ab then m lene k liye 
promise3.then(function(user){
   console.log(user);
})

// 4th promise

const promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username :" utk ", email :"ek@sda.com"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    }, 1000);
})

const user1 = promise4.then((user) => {
  console.log(user);
//  return user.username 
 /// ye print nhi hoga ye ek error dega
})

// so we can do chaining here--->

promise4
.then((user) => {
  console.log(user);
  return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

// there is one more case i.e finally

promise4
.then((user) => {
  console.log(user);
  return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected ");
})

// 5th promise

const promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username :" utk ", email :"ek@sda.com"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    }, 1000);
})

// instead of .then and .catch we'll use async await, this will wait for sometime & agr vo kaam ho jata h tb hi aage bdhta h wn=rna error de dega

async function consumeFunc(){
    const res = await promise5
    console.log(res);
}

consumeFunc(); 

//agr aapne kuch request kri or vo nhi aa payi toh error aa jaynge or async or await jo h errors ko handle nhi kr skte h , toh hum ( try catch ) use krke vo resolve kr skte h


async function consumeFunc(){
    try {
        const res = await promise5
    console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumeFunc(); 

async function getAllusers(){
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = res.json()
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllusers()

// yaha pr values nhi aayengi because res.json b thoda time lgayega change krne m toh isliye waha pr bhi await likhna pdhega 

async function getAllusers(){
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllusers()

// issi ko .then.catch s kaise krnge

fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((e)=> console.log(e))

// yaha pr sbse pehle fetch m jo url wala data h vo sbse pehle print hua uske baad humara jo bhi upr ka code h vo print hua 
// WHY ?????????????//

