// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128 ){
    alert("Please enter a number between 8 and 128");
    passwordLength = prompt("How many characters would you like your password to contain?");
  }
    
  var specCharacters = confirm("Click OK to confirm including special characters.");
  var numCharacters = confirm("Click OK to confirm including numeric characters.");
  var lowCaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  var upCaseCharacters = confirm("Click OK to confirm including uppercase characters");

  var selected = [];
    if (specCharacters) {
      selected = selected.concat(specialCharacters);
    } 
    if (numCharacters) {
      selected = selected.concat(numericCharacters);
    } 
    if (lowCaseCharacters) {
      selected = selected.concat(lowerCasedCharacters);
    } 
    if (upCaseCharacters) {
      selected = selected.concat(upperCasedCharacters);
    }

    let password = "";
        for (let i = 0; i < passwordLength; i++) {
          let choice = [Math.floor(Math.random() * selected.length)];
          password = password + selected[choice];
        }
        return password;
    }


// Function for getting a random element from an array
//function getRandom(arr) {

//}

// Function to generate password with user input
//function generatePassword() {

//}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions, writePassword);
