// this is lec 63

let array = [1,2,3,4,5]
let newArr =[]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element**2)
// }

newArr = array.map ((e) => {
    return e **2
})

console.log(newArr)

let array2 = [ 3,66,77,44,2]
const greaterThanThree = (e) => {
    if (e>3) {
        return true
    }return false
}
console.log(array2.filter(greaterThanThree))

const red = (a,b)=>{
    return a * b
}
console.log(array.reduce(red))

let sname = "poojan"
console.log(Array.from(sname))