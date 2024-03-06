
// A closure is an advanced concept that involves a function and any other data the function can access. So, a Closure is a function that uses variables from the outer lexical scope. The interpreter considers any arguments you pass to functions from the global space. If a function only relies on its internal values and parameters, it's not considered a closure. Remember that functions can access values from other external functions considered closures.

// The interpreter stores that data in Heap Memory, calling the function and knowing the free variables' values. That also means they require more memory and processing power. Closures are robust and have many advantages. They help with data encapsulation. Plus, they also help with removing redundant and maintaining modular code. Let's see an example:

function createCaffeineAddict(coffeeType) {
    const addiction = `addicted to ${coffeeType}`;
    return function getHigh() {
    const highMessage = `Feeling wired and ${addiction}!`;
    console.log(highMessage);
    };
    }
    const espressoJunkie = createCaffeineAddict('espresso');
    const latteLover = createCaffeineAddict('latte');
    espressoJunkie();
    latteLover();