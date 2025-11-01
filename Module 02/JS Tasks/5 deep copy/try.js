let myDetails = {
  name: "ABC",
  dob: new Date(),       // Date object
  age: undefined,        // undefined property
  calAge: function () {  // Function property
    return "test"
  },
};

let ob2 = JSON.parse(JSON.stringify(myDetails));

// Output lines:
console.log(ob2);
console.log(ob2.dob instanceof Date);
console.log(ob2.age);
console.log(ob2.calAge);

//structured cloning can be used to deep copy object without losing data types and functions
// let ob3 = nativeStructuredClone(myDetails);
// console.log(ob3);
// console.log(ob3.dob instanceof Date);
// console.log(ob3.age);
// console.log(ob3.calAge());  
//nativeStructuredClone is available in modern browsers and Node.js v17.0.0 and above
//for older versions of Node.js we can use structuredClone function
//let ob4 = structuredClone(myDetails);
//console.log(ob4);