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
var usableCharTypes = "";
var specials = "!@#$%^&*(){}[]=<>/,.";
var numerics = "0123456789";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";

if (confirm("Include special characters?") === false) {
  useSpecialChar = false;
  numOfCharTypes--;
};
if (confirm("Include numeric characters?") === false) {
  useNumericChar = false;
  numOfCharTypes--;
};
if (confirm("Include uppercase characters?") === false) {
  useUpperChar = false;
  numOfCharTypes--;
};
if (confirm("Include lowercase characters?") === false) {
  useLowerChar = false;
  numOfCharTypes--;
};
//if user doesn't choose any character types
if (numOfCharTypes === 0) {
  //return '';
}
console.log(numOfCharTypes + " " + useSpecialChar + " " + useNumericChar + " " + useUpperChar + " " + useLowerChar);

function getRandomSpecial() {
  const specials = "!@#$%^&*(){}[]=<>/,.";
  return specials[Math.floor(Math.random() * specials.length)];
}
// console.log(getRandomSpecial() + getRandomUpper() + getRandomNumeric() + getRandomLower());

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
function generatePassword() {
  pwd = "";
  numberOfChar = passwordLength / numOfCharTypes;
  modOfChar = passwordLength % numOfCharTypes;

  for (i = 0; i < passwordLength; i++) {
    if (useSpecialChar === true) {
      pwd = pwd + getRandomSpecial();
    }
    //next round
    for (j = 0; j < passwordLength; j++) {
      if (useNumericChar === true) {
        pwd = pwd + getRandomNumeric();
      }
    }
    //next round
    for (k = 0; k < passwordLength; k++)
    if (useUpperChar === true) {
      pwd = pwd + getRandomUpper();
    }
    //next round
    for (l = 0; l < passwordLength; l++)
    if (useLowerChar === true) {
      pwd = pwd + getRandomLower();
    }
  }
  console.log(pwd);
  return pwd;
}
generatePassword();
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
