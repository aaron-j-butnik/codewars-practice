// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// My Solution:

function spinWords(string) {
  let newArr = [];
  let strArr = string.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      newArr.push(Array.from(strArr[i]).reverse().join(""));
    } else {
      newArr.push(strArr[i]);
    }
  }
  let newStr = newArr.join(" ");
  return newStr;
}

let str = "my name is hello there sall";
const result = spinWords(str);
console.log(result);

// CodeWars top solution:

// function spinWords(str){
//    return str.split(' ')
//      .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
//      .join(' ');
//  }
