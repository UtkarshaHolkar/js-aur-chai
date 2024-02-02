// Arrow function

// this can't be used inside arrow function
const abc = () => {
    let name = "s";
    console.log(this)//this will give empty object
    console.log(this.name) // undefined
}

