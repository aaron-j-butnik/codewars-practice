// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// My Solution:

function descendingOrder(num) {
  return Number(
    String(num)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

const nums = 1236457;
const result = descendingOrder(nums);
console.log(result);

// CodeWars top solution:

// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }
