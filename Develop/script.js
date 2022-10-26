// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  writePassword();
}

// Write password to the #password input
function writePassword() {
  var length = prompt('Please choose your password length from 8 to 128 characters.')
  var newlenth = parseInt(length);
  if (isNaN(newlength), newlength<8, newlength>128)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
