// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompt user for passwordLength between 8-128 characters
var passwordLength = prompt("Password Length? (must be between 8 and 128)");
passwordLength = parseInt(passwordLength);
if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Password Length? (must be between 8 and 128)");
} else {
  console.log(passwordLength);
};
 
//prompt user for desired character types
var useSpecialChar = true;
var useNumericChar = true;
var useUpperChar = true;
var useLowerChar = true;
var numOfCharTypes = 4;

if (confirm("Include special characters?") === false){
  useSpecialChar = false;
  numOfCharTypes--;
};
if(confirm("Include numeric characters?") === false){
  useNumericChar = false;
  numOfCharTypes--;
};
if (confirm("Include uppercase characters?") === false){
  useUpperChar = false;
  numOfCharTypes--;
};
if (confirm("Include lowercase characters?") === false){
  useLowerChar = false;
  numOfCharTypes--;
};
console.log(numOfCharTypes + " " + useSpecialChar + " " + useNumericChar + " " + useUpperChar + " " + useLowerChar);

//write arrays for character types
var specialChar = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var numericChar = ["0123456789"];
var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];


//get random char from each type
function getRandomSpecial(){
  var randomSpecialIndex = specialChar[Math.floor(Math.random() * specialChar.length)];
  var newSpecialChar = specialChar[randomSpecialIndex];
  console.log(newSpecialChar);
  return newSpecialChar;
};
getRandomSpecial();

//generate password
function generatePassword(){
  for(i=0; i <= numOfCharTypes; i++){
    
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
