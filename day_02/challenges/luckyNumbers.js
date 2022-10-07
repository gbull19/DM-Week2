// let luckyNumbers = (num1) => {
//     num1 = parseInt(num1);
//     if (num1 >= 10 || num1 <= 0) {
//         console.log("Must be an integer between 1-10.")
//     } else {
//         let arr1 = [];
//         while (arr1.length < num1) {
//             let num2 = Math.floor(Math.random() * 10 +1);
//             if (!arr1.includes(num2)) {
//                 arr1.push(num2);
//             }
//         } return arr1;
//     }
// }
// console.log(luckyNumbers("5"));

let luckyNumbers = (num1) => {
    num1 = parseInt(num1);
    if (num1 >= 10 || num1 <= 0) {
        console.log("Must be an integer between 1-10.")
    } else {
        const set1 = new Set();
        while (set1.size < num1) {
            let num2 = Math.floor(Math.random() * 10 + 1);
            set1.add(num2);
            }
            return Array.from(set1);
        } 
    }
console.log(luckyNumbers("5"));