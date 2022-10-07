let t1 = true;
let t2 = true;
let f1 = false;
let f2 = false;
// return to me the output and what variable it will return
console.log(t1 && t2); //true -> t1

console.log(t2 && t1); //true -> t2

console.log(t1 && f1); //false -> f1

console.log(f1 && t1); //false -> f1

console.log(f1 && f2); //false -> f2

console.log(f2 && f1); //false -> f2
              
let let_add_falsy = (undefined && undefined) + 2; 
console.log(let_add_falsy); //NaN

let let_add_truthy = ("1.2" && true) + 2;
console.log(let_add_truthy); //3

//what would this return
console.log(((1 && 2) && (false && false))) //false


function your_first_function(name, number) {
    if (typeof(name) != "string") {
        return "Name needs to a string.";
    } else if (typeof(number) != "number") {
        return "Favorite number needs to be a number.";
    } else {
        return `Your name is ${name} and your faovrit number is ${number}.`;
    }
};
console.log(your_first_function("Garrett", 21));

const square = (x) => {
    return x * x;
}
console.log(square(2));
