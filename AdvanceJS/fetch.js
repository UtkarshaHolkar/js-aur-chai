//+++++++++++++++ FETCH +++++++++++++++++++++

fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((e)=> console.log(e))


// ye ek global method h jo ki resource extract / fetch krti h from the network...
// ye ek promise return krta h.

//Interview question

// fetch() : promise only rejects when there is network error 
// it does not reject http errors (404 or other status code....) 

// this below question is from promises,,,,
// yaha pr sbse pehle fetch m jo url wala data h vo sbse pehle print hua uske baad humara jo bhi upr ka code h vo print hua 
// WHY ?????????????//


// fetch k liye ek special queue bnti h vo h micro task queue or fetch queue // its very fast or we can say its a most priority queue..
//Thats the reason firstly fetch code ran and output was shown ...

// fetch--- domparts m kaam krta h
// 1. web browser/ node -- api / request handle krta h ye--
// ye ya toh browser based api handle krega ya fir node based api.. yaha se ek network request milti h, mtlb ya toh network pr req jayegi ya fir nahi jayegi.. agr req chli gyi or vaha se response aagya toh vo humesha onFulfilled[] m jata h.. or agr response nhi aata h ya fir req ja hi nhi payi toh onRejection[] m aayega, agr 404 ya kisi bhi tarah k error response aata h tb bhi vo onfulfilled[] m jayega because ye ek response h req se...

// 2. data -- ek variables m space reserve krne k liye, jisme ek array hoti h onFulfilled[] or dusri array hoti h onRejection[], isme hum manually kuch bhi push nhi kr skte h, access hi nhi kr skte h isse

// firstly data reserve hga memory m then api req handle hogi