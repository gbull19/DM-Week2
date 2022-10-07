// Write your code below

// let hasUniqueChars = (str) => {
//     if (typeof str !== "string") {
//         return "Must enter a valid string";
//     } else {
//         let set = new Set(str);
//         return set.size === str.length
//     }
// }
// console.log(hasUniqueChars("Garrett"));

let hasUniqueChars = (str) => {
    str = String(str);
    let set = new Set(str);
    return set.size === str.length;
}
console.log(hasUniqueChars(2));