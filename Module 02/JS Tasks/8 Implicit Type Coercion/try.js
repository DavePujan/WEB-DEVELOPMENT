 console.log([] == ![]);

//  more examples

// 1 == true	1 == 1 (Boolean to Number)	true
// '0' == false	'0' == 0 (Boolean to Number) 
// →
// → 0 == 0 (String to Number)	true
// ' \t\n ' == 0	' \t\n ' == 0$ $\rightarrow$ 0 == 0` (Whitespace String to Number)	true
// [1] == 1	'1' == 1$ (Array to String) $\rightarrow$ 1 == 1` (String to Number)	true
// [2] == 2	'2' == 2$ (Array to String) $\rightarrow$ 2 == 2` (String to Number)	true
// !0 == true	true == true (!0 is true)	true
// NaN == NaN	No coercion possible or required.	false
// [] == ""	"" == "" (Array to String)	true

console.log([0] == false); // true
console.log([1,2] == "1,2"); // true
console.log([[]] == ""); // true
console.log([1] == true); // true
console.log([1,2] == true); // false
console.log(1 == 1); // true
console.log("1" == 1); // true
console.log("true" == true); // false
console.log("" == NaN); // false
console.log(0 == ""); // true
console.log(0 == NaN); // false
console.log( "\t\n" == 0); // true

// short trick to remember (one liners)
//when 0 , "", false, null, undefined , NaN  are compared with == then all are equal to each other except NaN
// but NaN is not equal to anything including itself    
//when array is compared with == then it is converted to string and then compared
// when boolean is compared with == then it is converted to number and then compared
// when string is compared with number then string is converted to number and then compared
// when null and undefined are compared with == then they are equal to each other but not equal to anything else
// when both are object then reference is compared

// when one is object and other is primitive then object is converted to primitive and then compared
// example: of above line
console.log({} == "[object Object]"); // true