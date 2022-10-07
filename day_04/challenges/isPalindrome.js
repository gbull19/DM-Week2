// Write your code below
// const isPalindrome = (str) => {
//     str = str.toString();
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }
// console.log(isPalindrome("racecar"))

const isPalindrome = (str) => {
    let newStr = str.split("").reverse().join("");
    if (str === newStr) {
        return true;
    }
    return false;
}
console.log(isPalindrome("racecar"))


class Dog {
    constructor(name, age) {
      this._name = name;
      this.age = age
      this._behavior = 0;
    }
    // get name() {
    //   return this._name;
    // }
    get behavior() {
      return this._behavior;
    }   
    incrementBehavior() {
      this._behavior++;
    }
  }
  const halley = new Dog('Halley', 2);

console.log(halley.name);
console.log(halley._name)
halley.name = "Dan";
console.log(halley.name);
