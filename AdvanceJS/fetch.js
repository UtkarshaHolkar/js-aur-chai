//+++++++++++++++ FETCH +++++++++++++++++++++

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