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
// var specialChar = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
// var numericChar = ["0123456789"];
// var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
// //stringify and split arrays
// specialCharArray = JSON.stringify(specialChar);
// specialCharArray = specialCharArray.split("");
// numericCharArray = JSON.stringify(numericChar);
// numericCharArray = numericCharArray.split("");
// upperCharArray = JSON.stringify(upperChar);
// upperCharArray = upperCharArray.split("");
// lowerCharArray = JSON.stringify(lowerChar);
// lowerCharArray = lowerCharArray.split("");

//get random char from each type
// function getRandomSpecial(){
//   var randomSpecialIndex = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
//   var newSpecialChar = specialCharArray[randomSpecialIndex];
//   console.log(newSpecialChar);
//   console.log(typeof newSpecialChar);
//   return newSpecialChar;
// };
// getRandomSpecial();

function getRandomSpecial() {
	const specials = "!@#$%^&*(){}[]=<>/,.";
	return specials[Math.floor(Math.random() * specials.length)];
}
getRandomSpecial();
console.log(getRandomSpecial() + getRandomUpper() + getRandomNumeric() + getRandomLower());

function getRandomNumeric() {
	const numerics = "0123456789";
	return numerics[Math.floor(Math.random() * numerics.length)];
}

function getRandomUpper() {
	const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return uppers[Math.floor(Math.random() * uppers.length)];
}

function getRandomLower() {
	const lowers = "abcdefghijklmnopqrstuvwxyz";
	return lowers[Math.floor(Math.random() * lowers.length)];
}

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
