// Starting array
// let array = [28, 43, -12, 30, 4, 0, 12];
// Given an array of numbers, console.log true if any two numbers in the 
// array add to zero, otherwise log false.

// Write your solution below:
let array = [28, 43, -12, 30, 4, 0, 12];

const check = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length ; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            } 
        }
    }
    return false
}
console.log(check(array));