// typeof

function getchai(kind: string | number){
    if (typeof kind === "string"){
        return `making ${kind} chai`
    }
    return `no. of order is ${kind}`
}
console.log(getchai("pink"));
console.log(getchai(2));

// type narrowing helps in suggest methods.

// truthiness
// here ?: is used to check if message has occured or not?
function getMsg(msg?: string){
    if(msg){
        return msg
    }
    return "no message"
}
console.log(getMsg("hello"));
console.log(getMsg());