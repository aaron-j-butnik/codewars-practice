// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  let newStr = "";
  const arrText = text.toLowerCase().split("");
  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] === "a") {
      newStr += 1 + " ";
    } else if (arrText[i] === "b") {
      newStr += 2 + " ";
    } else if (arrText[i] === "c") {
      newStr += 3 + " ";
    } else if (arrText[i] === "d") {
      newStr += 4 + " ";
    } else if (arrText[i] === "e") {
      newStr += 5 + " ";
    } else if (arrText[i] === "f") {
      newStr += 6 + " ";
    } else if (arrText[i] === "g") {
      newStr += 7 + " ";
    } else if (arrText[i] === "h") {
      newStr += 8 + " ";
    } else if (arrText[i] === "i") {
      newStr += 9 + " ";
    } else if (arrText[i] === "j") {
      newStr += 10 + " ";
    } else if (arrText[i] === "k") {
      newStr += 11 + " ";
    } else if (arrText[i] === "l") {
      newStr += 12 + " ";
    } else if (arrText[i] === "m") {
      newStr += 13 + " ";
    } else if (arrText[i] === "n") {
      newStr += 14 + " ";
    } else if (arrText[i] === "o") {
      newStr += 15 + " ";
    } else if (arrText[i] === "p") {
      newStr += 16 + " ";
    } else if (arrText[i] === "q") {
      newStr += 17 + " ";
    } else if (arrText[i] === "r") {
      newStr += 18 + " ";
    } else if (arrText[i] === "s") {
      newStr += 19 + " ";
    } else if (arrText[i] === "t") {
      newStr += 20 + " ";
    } else if (arrText[i] === "u") {
      newStr += 21 + " ";
    } else if (arrText[i] === "v") {
      newStr += 22 + " ";
    } else if (arrText[i] === "w") {
      newStr += 23 + " ";
    } else if (arrText[i] === "x") {
      newStr += 24 + " ";
    } else if (arrText[i] === "y") {
      newStr += 25 + " ";
    } else if (arrText[i] === "z") {
      newStr += 26 + " ";
    } else {
      continue;
    }
  }
  return newStr.trimEnd();
}

const result = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(result);

// CodeWars top solution:

// function alphabetPosition(text) {
//    var result = "";
//    for (var i = 0; i < text.length; i++){
//      var code = text.toUpperCase().charCodeAt(i)
//      if (code > 64 && code < 91) result += (code - 64) + " ";
//    }

//    return result.slice(0, result.length-1);
//  }
