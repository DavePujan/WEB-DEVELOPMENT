for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output will be 3, 3, 3 because by the time the timeout functions execute, the loop has completed and i is 3

// to fix this use let instead of var
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j);
  }, 1000);
}
// Output will be 0, 1, 2 because let creates a new binding for each iteration of the loop