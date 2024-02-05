

const myArr1 = [1,2, 3, 4 ,5];
// const myArr2 = [1,2, 3, 4 ,5, true, "hi"];
// const myhero = new Array('a','b','c');

// // it can be mixed data types (can have array, object in an array as a element)
// // they are resizable 
// // zero based indexing

// // Interview ques
// // ----------------------------SHALLOW COPYING AND DEEP COPY
// // shallow copy means the original reference of the array and deep copy means the copy of original data 

// console.log(myArr1[2]);

// myArr1.push(9);
// console.log(myArr1);
// myArr1.pop();  // remove last value
// console.log(myArr1);

// // it will shift values and insert it on front of the array or beginning of array, but its costly to shift when there is more  umbers
// myArr1.unshift(2);
  
// // it will remove from first
// myArr1.shift();

// // its there or not (return true or fls)
// myArr1.includes(9)

// // is there that index present
// myArr1.indexOf(4);

// // --------------------- JOIN (it will convert array in string  ) BASICALLY IT JOINS ALL THE ELEMENTS IN A STRING

// const newarr = myArr1.join()
// console.log(newarr);
// console.log(myArr1);
// console.log(typeof newarr);

// //  ---------------------------------SLICE, SPLICE
// // SLICE returns section of a array (excluding last)
// // MAJOR DIFFERENCE IS : splice cuts the section and changes in the original array
// // SPLICE return the section of array (including last)

// const a = [1,2,3,4,5,6,7];
// const b = [1,2,3,4,5,6,7];

// const newA = a.slice(1,3);

// const newB = b.splice(1,3);

// console.log("old A array", a);
// console.log("NEW A array", newA);

// console.log("old B array", b);
// console.log("NEW B array", newB);

// // ---------------------IF we try to push an array in another array then instead of adding that array elementr to last of that array it actually takes the complete array as an element and add that array as a single elemnt. (array inside array)

// const a = [1,2,3,4,5,6,7];
// const b = [1,2,3,4,5,6,7];

// a.push(b);
// console.log(a);


// // Instead we will use---------- concat() ----------------function to merge the elements of both Arrays CONCAT function return the new array after merging the elements 


// const a = [1,2,3,4,5,6,7];
// const b = [1,2,3,4,5,6,7];

// const c = a.concat(b);
// console.log(c);

// // --------------- SPREAD -------------
// // we can use spread function also to spread the elements(merging arrays)

// const a = [1,2,3,4,5,6,7];
// const b = [1,2,3,4,5,6,7];

// const c = [...a, ...b];
// console.log(c);

// //---------------------- If there is array inside array inside array, SO if you want to have all the elements in one array only them using FLAT METHOD---------------------

// const arr1 = [1,2,3,4, [5,6], 7, [1,3,5,[7,9]]];
// // const arr2 = arr1.flat(Infinity);

// // WE CAN SAY INFINITY IF WE DON'T KNOW TYE DEPTH IF WE KNOW THEN WRITE ITB IN numbers, here depth is 3
// // so

// const arr2 = arr1.flat(3);

// //---------------------------------- USED IN WEB SCRAPING

// console.log(Array.isArray("utk"))
// console.log(Array.from("utk")) //IT will convert data in array

// // INTERESTING CASE FOR INTERVIEW (return empty array bcoz we need to provide what to have in array KEY or VALUE)
// console.log(Array.from({name: "utk"})) 

// //---------------------------- If you want to turn the multiple variales into an array

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3))

