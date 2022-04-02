// Assignment code here
var lower = window.confirm("allow lower case?");
var upper = window.confirm("allow uper case?");
var number = window.confirm("allow numbers?");
var symbols = window.confirm("allow symbols?");
var lengthPrompt = window.prompt("pick a length of password");
var length = +lengthPrompt.value;



//Wrap all get random functions into one function
const getRandomFunc ={
  lower: getLowerCase,
  upper: getUpperCase,
  number: getNumber,
  symbol: getSymbol
};

//functions to randomize letters, number, symbols
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol(){
  const symbol = '!@#$%^&*()[]{}=+/,.<>?';
  return symbol[Math.floor(Math.random()* symbol.length)];
}

/*function generatePassword(lower, upper, number, symbols){
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbols;
  const typesArray =[{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0]);
}*/


const typesArray =[{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0]);

console.log(lower, upper, number, symbols, lengthPrompt);
console.log(getLowerCase());
console.log (getUpperCase());
console.log(getNumber());
console.log(getSymbol());
console.log(typeof length);
console.log(typesArray);




console.log(getRandomFunc);


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);