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