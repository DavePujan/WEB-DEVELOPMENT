let subs: number | string;

subs = 12;
subs = "12";

let apiRequestStatus: "loading" | "success" | "error";
apiRequestStatus = "loading";
apiRequestStatus = "success";
apiRequestStatus = "error";
console.log(apiRequestStatus)

let airlineSeat: "aisle" | "window" | "middle";
airlineSeat = "aisle";
airlineSeat = "window";
airlineSeat = "middle";
console.log(airlineSeat)


let orders = [10 , 20, 28, 30];

let currentOrder; // any type

for(let order of orders){
    currentOrder = order;
    break;
}

console.log(currentOrder) // type: number | undefined


// any type:
let anything: any;
anything = 12;
// anything = "12";
// anything = true;
// anything = {};
// anything = [];
// anything = function() {};

console.log(anything)