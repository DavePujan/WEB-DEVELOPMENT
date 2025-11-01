// Line 1
console.log(value); 

if (true) { // Line 2
  // Line 3: var declaration is here
  var value = "Declared in block"; // Line 4
}

// Line 5
console.log(value); 

//more examples
function testHoistVar() {
  console.log(a); // undefined due to hoisting
  var a = 10;
  console.log(a); // 10
}
testHoistVar();

function testHoistLet() {
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); // 20
}
testHoistLet();