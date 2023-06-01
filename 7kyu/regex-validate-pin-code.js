// Prompt
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My solution:

const validatePin = (pin) => {
  const pinLength = pin.length;
  const pinCorrectLength = pinLength === 4 || pinLength === 6;
  const pinOnlyNumbers = pin.match(/^\d+$/);

  if (pinCorrectLength && pinOnlyNumbers) {
    return true;
  }
  return false;
};

const pin = "1556";
const result = validatePin(pin);
console.log(result);

// Top CodeWars solution:
// function validatePIN(pin) {
//    return /^(\d{4}|\d{6})$/.test(pin)
//  }
