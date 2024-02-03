//  ++++++++++++++ Call Stack ++++++++++ 
// works on the basis of LIFO (last in first out)

                
//     __________________             
//     |________________|                
//     |____three()_____|                
//     |____two()_______|                
//     |____one()_______|                
//     |global-exec-cont|                

// first of all global context is created in stack

// then let's say if one() is a function and two() is inside one() and then three() is inside two()

// in this situation first one() will get callled then two() will get called and then three()

// and the one who will be called last will be out and then deleted first