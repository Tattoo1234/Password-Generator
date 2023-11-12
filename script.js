// Assignment Code
var generateBtn = document.querySelector("#generate");

var length; 
var lowercase;
var uppercase;
var number;
var specialCharacter;
var components = [length, lowercase, uppercase, number, specialCharacter]

function generatePassword() {
      prompt 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
