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

// My (partial) solution without using regex:

const validatePin = (pin) => {
  const pinLength = pin.length;
  const pinCorrectLength = pinLength === 4 || pinLength === 6;
  const letters = [
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
  ];

  if (pinCorrectLength) {
    for (let i = 0; i < pin.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (pin[i] === letters[j]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

const pin = "2223";
const result = validatePin(pin);
console.log(result);

// Top CodeWars solution:
// function validatePIN(pin) {
//    return /^(\d{4}|\d{6})$/.test(pin)
//  }
