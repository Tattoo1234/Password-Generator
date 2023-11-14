// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberCharacters; 
var lowercase;
var uppercase;
var number;
var specialCharacter;
var components = [length, lowercase, uppercase, number, specialCharacter]

function generatePassword() {
      window.prompt("Select Number of Characters") 
        if (!numberCharacters) {
          return;
        }
        else (numberCharacters) {
          for(let i=8; i<= 128 ; i++) {
          
          }
        }
      window.alert("Include Special Characters?")
      window.alert("Include Numbers?")
      window.alert("Include Lowercase Characters?")
      window.alert("Include Uppercase Characters?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
