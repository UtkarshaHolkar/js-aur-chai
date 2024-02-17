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