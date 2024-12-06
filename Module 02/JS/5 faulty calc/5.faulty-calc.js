/*
this is lec 59
Create a faulty calc using js

this faulty calc does following things:
1. it takes two numbers as input from the user
2. it performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

it performs wrong operation 10% of the times.
*/
let a = Number(prompt("Please enter your first number: "));
let b = Number(prompt("Please enter your second number: "));
let c = prompt("Please enter your operation which you want to perform: ");
// console.log(a,b,c)

let x = (Math.random() * 100);

if (x <= 10) {
    console.log("Your calc is not working Properly")
    if (c === "+") {
        console.log("a + b is", a - b)
    }
    else if (c === "*") {
        console.log("a * b is", a + b)
    }
    else if (c === "-") {
        console.log("a - b is", a / b)
    }
    else if (c === "/") {
        console.log("a / b is", a ** b)
    }
} else {
    console.log("Your calc is working Properly")
    if (c === "+") {
        console.log("a + b is", a + b)
    }
    else if (c === "*") {
        console.log("a * b is", a * b)
    }
    else if (c === "-") {
        console.log("a - b is", a - b)
    }
    else if (c === "/") {
        console.log("a / b is", a / b)
    }
}