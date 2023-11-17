// Javascript linking to Generate Password Button on the index.html file
var generateBtn = document.querySelector("#generate");

// Variables containing the content for each type of character that the user might select
var numberCharacters;
var specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase();
var toComplete = "";

// Function that takes the charcter types the user selects and includes them in the password
function generatePassword() {
  toComplete = "";
  var passwordString = "";
  numberCharacters = window.prompt("Select Number of Characters")

//  sends alert if user does not choose number of characters within parameters (8-128)
  if (!numberCharacters || numberCharacters < 8 || numberCharacters > 128) {
    alert("Entry must be between 8 and 128 Characters")
    return;
  }


// Confirm Method to request preferences from the user, the variables includes what the user chooses
  var includeSpec = window.confirm("Include Special Characters?")
  var includeNum = window.confirm("Include Numbers?")
  var includeLow = window.confirm("Include Lowercase Characters?")
  var includeUpp = window.confirm("Include Uppercase Characters?")

  //Allows each character type to included independently using the above variables 
  if (includeSpec) {
    toComplete = toComplete + specialCharacter
  }
  if (includeNum) {
    toComplete = toComplete + number
  }
  if (includeLow) {
    toComplete = toComplete + lowercase
  }
  if (includeUpp) {
    toComplete = toComplete + uppercase
  }

  // sends alert if user chooses no character types
  if (!includeSpec && !includeNum && !includeLow && !includeUpp) {
    alert("At least one character type needs to be selected")
  }




// for loop that chooses characters randomly
  for (let i = 0; i < numberCharacters; i++) {
    var textComplete = toComplete[Math.floor(Math.random() * toComplete.length)];
    
    // adds characters to password when function is complete
    if (textComplete) {
      passwordString = passwordString + textComplete
    }

  }

  return passwordString

}

// next function that includes the password in the box set in the index.html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Javascript for click function, sets the writePassword when button is clicked
generateBtn.addEventListener("click", writePassword);
