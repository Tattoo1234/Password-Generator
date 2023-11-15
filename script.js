// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberCharacters;
var specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase();


function generatePassword() {
      numberCharacters = window.prompt("Select Number of Characters") 
        if (!numberCharacters || numberCharacters <8 || numberCharacters >128) {
          return;
        }
       
      var includeSpec = window.confirm("Include Special Characters?")
      var includeNum = window.confirm("Include Numbers?")
      var includeLow = window.confirm("Include Lowercase Characters?")
      var includeUpp = window.confirm("Include Uppercase Characters?")

        if (includeSpec) {
          specialCharacter.random()
           }
        
        
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
