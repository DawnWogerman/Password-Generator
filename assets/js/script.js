//function to generate password 
function generatePassword(){
  //create and store variables
  let password = '';
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChar = "abcdefghijklmnopqrstuvwxyz";
  let numberChar = "1234567890";
  let symbolChar = '!@#$%^&*()[]{}=+/,.<>?';
  let allPossibleChar = '';

  //prompt user input variables needed to generate password
  let lower = window.confirm("Include Lower Case Letters?");
  let upper = window.confirm("Include Upper Case Letters?");
  let number = window.confirm("Include Numbers?");
  let symbols = window.confirm("Include Special Characters/Symbols?");

 // check if prompts are selected
 //check for lower case
if(lower){
  allPossibleChar=allPossibleChar + lowerChar;
}
//check for upper case
if(upper){
  allPossibleChar=allPossibleChar + upperChar;
}
//check for number
if(number){
  allPossibleChar=allPossibleChar + numberChar;
}
//check for symbols/special characters
if(symbols){
  allPossibleChar=allPossibleChar + symbolChar;
}
//check that at lease one character set is selected by user
if(!lower && !upper && !number && !symbols){
  window.alert("You must select at least one character set");
  return '';
}
//prompt to enter password length
let length = window.prompt("Enter Length of Password");
//check that length entered is at least 8 characters and no longer than 128 characters
if(length < 8 || length > 128){
  window.alert("Password must be between 8 and 128 character long");
  return '';
}
//
for(let i = 0; i < length; i++){
 let pwd = allPossibleChar[Math.floor(Math.random()* allPossibleChar.length)];
 password = password + pwd;
}
return password;
};
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
