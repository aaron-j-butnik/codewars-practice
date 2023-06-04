// Prompt
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My solution using regex:

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// My solution without using regex:

const validatePin = (pin) => {
  const pinStr = pin.toString();
  const pinLength = pinStr.length;
  const pinCorrectLength = pinLength === 4 || pinLength === 6;
  const lettersAndSpChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    ":",
    "'",
    '"',
    "<",
    ">",
    ",",
    ".",
    "/",
    "[",
    "]",
    "{",
    "}",
  ];

  if (pinCorrectLength) {
    for (let i = 0; i < pinLength; i++) {
      for (let j = 0; j < lettersAndSpChar.length; j++) {
        if (pin[i] === lettersAndSpChar[j]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

const pin = 2333;
const result = validatePin(pin);
console.log(result);

// Top CodeWars solution:
// function validatePIN(pin) {
//    return /^(\d{4}|\d{6})$/.test(pin)
//  }
