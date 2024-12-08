// this is lec 63

let arr = [1,2,3,4,5]

console.log(arr)
console.log(arr[0])
console.log(arr.length)

arr[0] = 566
console.log(arr[0])

console.log(typeof(arr))

console.log(arr.toString())
console.log(arr.join(" and "))

console.log(arr.pop())
console.log(arr.push(100))
console.log(arr.push("poojan"))
console.log(arr.unshift("harsh"))   // like push but add at begining

console.log(arr)
console.log(arr.shift("harsh"))// like pop but remove from end 
console.log(arr)

console.log(delete(arr[5]))
console.log(arr)


let x = [3,2,1]
let y = [4,5,6]
let z = [7,8,9]

console.log(x.concat(y,z))

console.log(x.sort())

console.log(x.splice(0,1))



let arr2 = [1,2,3,4,5]

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
    
}

arr2.forEach((val,index,array)=>{
    console.log(val,index,array)
})

