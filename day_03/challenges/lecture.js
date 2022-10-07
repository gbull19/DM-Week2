let arr = [1,2,3,4,5,6,7];
arr.forEach(num => {
    console.log(num + 3);
})


let arr1 = [1,2,3,4,5,6,7];
let arr2 = arr.map(num => num * 2);
console.log(arr2);


let arr3 = [1,2,3];
let arr4 = arr.map(num => num * num)
console.log(arr4);


// let arr = [1,2,3,4,5,6,7];

// const addThreeAndPrint = num => {
//     console.log(num + 3)
// }
// arr.forEach(num => addThreeAndPrint(num))


// let arr = [1,2,3,4,5,6,7];

// arr.forEach(function(num){
//     console.log(num + 3)
// })


const greetingMachine = (name,greeting) => {
    return greeting(name)
}

const hello = name => {
    return `Hello, ${name}!`
}
const sup = name => {
    return `'Sup, ${name}?`
}
const yo = name => {
    return `Yo, ${name}!`
}
const goodmorning = name => {
    return `Good morning, ${name}!`
}

const addTen = num => {
    return num + 10 
}

console.log(greetingMachine("Kelvin", sup))
console.log(greetingMachine("Lukas", yo))
console.log(greetingMachine(26, goodmorning))
console.log(greetingMachine(26, addTen))



function B() {
    console.log('Inside the method B. called from B')
}

function A() {
    console.log("Method A being called")
    return B
}

let returned_function = A();
console.log(returned_function);
console.log(B())