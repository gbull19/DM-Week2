// For the following questions, ignore the "=============" separator console logs.
let namesArr = ["Jacob","Max","Crystal","Alicja","Marvin","Stella","Brian"]

const hello = name => console.log(`Hello, ${name}!`)
const sup = name => console.log(`'Sup, ${name}?`)
const goodbye = name => console.log(`Goodbye, ${name}!`)
const peace = name => console.log(`Peace out, ${name}!`)

// Given the code above, what do the following lines print to the console?

sup(namesArr[4]) //'Sup, Marvin?
hello(namesArr[6]) //Hello, Brian!
peace(namesArr[0]) //Peace out, Jacob

// Given the following, what will you see in the console?

for(let i = 0; i < namesArr.length; i++){
    goodbye(namesArr[i])
}

/* ==============================================================
Goodbye, Jacob!
Goodbye, Max!
Goodbye, Crystal!
Goodbye, Alicja!
Goodbye, Marvin!
Goodbye, Stella!
Goodbye, Brian!
==============================================================
*/

const greetingMachine = arr => {
    let firstHalfAlpha = /^[A-M,a-m]/
    let secondHalfAlpha = /^[N-Z,n-z]/

    for(let i = 0; i < arr.length; i++){
        if (firstHalfAlpha.test(arr[i])) {
            console.log(`Good to see you, ${arr[i]}`)
        } else if (secondHalfAlpha.test(arr[i])) {
            console.log(`Always a pleasure, ${arr[i]}`)
        }
    }
}
greetingMachine(namesArr)

// Given the code above, describe what this function is doing.
// What are the parameters for this function?
// What is the output of this function?

/* ==============================================================
Checking every name in the array and logging "Good to see you, NAMEPARAM" 
if the name starts with letters a-m (not case sensitive) or "Always a 
pleasure, NAMEPARAM" if the name starts with letters n-z (not case 
sensititve).

Paramater is the array that contains strings

Good to see you, Jacob!
Good to see you, Max!
Good to see you, Crystal!
Good to see you, Alicja!
Good to see you, Marvin!
Always a pleasure, Stella!
Good to see you, Brian!
==============================================================
*/

const createRandomIDList = () => {
    let randomIDList = []

    while(randomIDList.length < 10) {
        let newId = ""
        for(let i = 0; i < 5; i++) {
            newId += Math.floor(Math.random() * 10)
        }
        randomIDList.push(newId)
    }

    return randomIDList
}
console.log(createRandomIDList())

// Given the code above, describe what this function is doing.
// What are the parameters for this function?
// What is the output of this function?

/* ==============================================================
Function will create an array of 10 randomly generated 5 digit numbers.
An array called randomIDList is created
While loop makes it run 10 times
Each time through the while loop with generate a new nubmer called "newID"
For loop runs 5 times (i.e. the 5 digits) and generates a random
number 0-0.9 that is multipled by 10, rounded down, and concatonated to 
newID
At the end of every for loop, the number is pushed to the array 
"randomIDList"

There is no specified parameter

Outputs an array with 10 random 5 digit numbers
Ex: [01234, 11234, 21234, 31234, 41234, 51234, 61234, 71234, 81234, 91234]
==============================================================
*/

const employeeMachine = arr => {
    for(let i = 0; i < arr.length; i++){
        if(/[0-3]$/.test(arr[i])){
            console.log(`Welcome aboard, employee number ${arr[i]}.`)
        } else if (/[4-6]$/.test(arr[i])){
            console.log(`Ah, employee number ${arr[i]}, good to see you.`)
        } else if (/[7-9]$/.test(arr[i])){
            console.log(`Another day in paradise, employee number ${arr[i]}.`)
        }
    }
}
employeeMachine(createRandomIDList());

// Given the code above, describe what this function is doing.
// What are the parameters for this function?
// What is the output of this function?

/* ==============================================================
Checks an array of numbers and returns one of three different messages
according to the last number of the employee's ID number.

Function contains and array as a parameter

Welcome aboard, employee number EMPLOYEEPARAM. //If # ends in 0-3
Ah, employee number EMPLOYEEPARAM, good to see you. //If # ends in 4-6
Another day in paradise, employee number EMPLOYEEPARAM. //If # ends in 7-9

==============================================================
*/

// Call the employee machine function with the create random ID list function invoked as an argument