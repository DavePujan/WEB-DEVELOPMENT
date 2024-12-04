// lec 56

let age = 44

if (age > 18) {
    console.log("you can drive")
}
else if (age == 0) {
    console.log("enter valid age")
}
else {
    console.log("you can't drive")
}
/*
== equal value
!=
=== equal value and type
!=== not equal value and type
>
<
<=
>=
? ternary operator

&&
||
!

*/

let a = 5
let b = 6

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a ** b)
console.log(a / b)

a += b
console.log(a)


let c = 5
let d = 6
let e = c>d ? console.log(true) : console.log(false)