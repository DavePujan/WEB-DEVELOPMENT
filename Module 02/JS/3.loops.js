// this is lec 57
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

let obj = {
    name: "harry",
    role: "programmer",
    company: "CodeWithHarry"
}

for (const key in obj) {
    const element = obj[key]
    console.log(key, element)
}

for (const iterator of "Harry") {
    console.log(iterator)
}

let i = 1
while(i<6){
    console.log(i)
    i++
}


let j = 1
do {
    console.log(j)
    j++
} while (j<=5);