// lec 55 cwh

var a = 5
a = a+ 1  // updation allowed

var b =6
// var 55a = 6  // not allowed
var c = "harry"

console.log(a+b+8) // 19
console.log(typeof a,typeof c) // number string

const a1 = 6
// a1 =a1 +5  // updation not allowed


// globle scope: var 
// let is no a global scope variable ex:
var x =55
{
    var x = 5
    console.log(x) // 5
}
console.log(x) // 5

let y =55
{
    let y = 5
    console.log(y) // 5
}
console.log(y) // 55 refers to upper y.






let p = "poojan"
let q = 22
let r = 43.4444
const s = true
let t = undefined
let u = null

console.log(typeof(p),typeof(q),typeof(r),typeof(s),typeof(t),typeof(u))


let o = {
    name: "harry",
    "job role": 544,
    salary : 0
}
console.log(o)
o.salary =1000 // update object
console.log(o)
