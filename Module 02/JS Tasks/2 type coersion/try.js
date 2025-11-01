console.log(2 + "2" - 1);
//simple Explanation:
//here first 2 converted to string and concatenated with "2" to give "22"
//then "22" is converted to number and 1 is subtracted from it to give 21

// means + "1" means concat with the number before it

// one more example
console.log("5" + 3 - 2);
//here "5" and 3 are concatenated to give "53"
//then "53" is converted to number and 2 is subtracted from it to give 51

// means + 3 means concat with the string before it

console.log("10" - 2 + "5");
//here "10" is converted to number and 2 is subtracted from it to give 8
//then 8 is concatenated with "5" to give "85"

console.log(4 + "5" / "3" - 1 * "2");
//here "5" is converted to number and divided by "3" (also converted to number) to give approx 1.6667
//then 4 is concatenated with approx 1.6667 to give "41.6667"
//then "41.6667" is converted to number and 1 * "2" (also converted to number) i.e. 2 is subtracted from it to give approx 39.6667


// simply go left to right and if - then consider as number and do subtraction ( / * % also consider as number and do respective operation)
// if + then consider as string and do concatenation