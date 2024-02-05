// +++++++++++ very impt for interview ++++++++++++++

// 1. global execution context is always created.
// And this global execution contecxt is put into 'this'
// 2. function execution context

// and if we go with mongoose then there is one more i.e
// 3. eval execution context

// if aapne browser m run kiya toh vaha global execution context alg hga agr node environment m kiya h toh vaha alg hga 

// Browser m global execution context , m 'this' ki value 'window object' hoti h

//  Javascript code is run in two phases -
// 1) Memory creation phase/ memory phase/ creation phase
//  2) execution phase

// in memory phase --> jo bhi variables h ya jo bhi humne declare kiya h usko memory allocate hoti h

let val1 = 10
let val2 = 24
function addnum(num1,num2){
    let total = num1 + num2
    return total;
}
let result = addnum(val1,val2)
let result2 = addnum(10,2);

//1st step---------))) first global environment/ global execution is created where this is allocated to "this"

//2nd step --------)))then (mcp)memory phase is created where variables are allocated
// firstly this all variables are alloted undefined value means val1 = val2 = result = result2 =  undefined
// and in addnum the definition is alloted. addnum = definition

// In 3rd step-------)))) In execution phase -> executes the code where:
// val1 = 10
// val2 =24
//  jb function declare or define hoga vo wala code execution phase m kch nhi work krega 
//  then vo wala code jaha pr function call hora h tb hum uss function k i.e addnum k alg execution context bnayenge:-  jisko bolnge new executional context jisme do chize create hongi 
// 1. new variable environment
// 2. execution thread

// it simply means ki jb bhi function call hga uske liye wps se yahi memory phase or execution phase create hga 

// memory phase for addnum:-
// val1 = val2 = total = undefined

// execution phase for addnum:-
// val1=10 -> num1 = val1 = 10
// val2=24 -> num2 = val1 = 24
//  total = 34

// jo bhi function ab return krega vo parent executional context(global execution context ) m return ho jayega

// or ye jo new executional context bnta h vo execute hone k badd delete ho jata h

// ab yahi same kaam result2 k liye bhi hga 