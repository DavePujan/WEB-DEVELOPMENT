console.log(Math.floor(Math.random() * (90000 + 10000))); //range 0 to 99999

/*
Math.floor(Math.random() * (max - min + 1)) + min;
explaination of above code:
1. Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
2. (max - min + 1) calculates the range of numbers you want. In this case, max is 90000 and min is 10000, so the range is 90000 - 10000 + 1 = 80001.
3. Math.random() * (max - min + 1) scales the random number to the desired range. This gives a floating-point number between 0 (inclusive) and 80001 (exclusive).
4. Math.floor(...) rounds down the scaled number to the nearest whole number, resulting in an integer between 0 and 80000 (inclusive).
5. Finally, adding min (10000) shifts the range from 0-80000 to 10000-90000.
This means the final output will be a random integer between 10000 and 90000 (inclusive).
*/

//example code for 1001 to 9999 otp (only 4 digit otp)
console.log(Math.floor(Math.random() * (9000 + 1000))); // range 0 to 9999
// but we need 1001 to 9999 so we add 1
//here the problem is it can give 2 or 3 digit otp also but we need 4 digit otp
//so we use below code

// or as  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(Math.floor(Math.random() * (9999 - 1001 + 1)) + 1001);
//this will never 