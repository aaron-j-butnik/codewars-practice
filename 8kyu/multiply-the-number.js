// Prompt:
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

// My solution:
const multiply = (num) => num * Math.pow(5, Math.abs(num).toString().length);

const result = multiply(-3);
console.log(result);

// Top solution on code wars:
// function multiply(number) {
//   return number * Math.pow(5, Math.abs(number).toString().length);
// }
