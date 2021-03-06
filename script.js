// Assignment code here
//presented with a series of prompts for password criteria
//choose a length of at least 8 characters and no more than 128 characters
//choose lowercase, uppercase, numeric, and/or special characters
//input should be validated and at least one character type should be selected
//a password is generated that matches the selected criteria
//password is either displayed in an alert or written to the page


var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "w", "y", "z"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
// console.log(uppercaseChar, lowercaseChar, numberChar, specialChar);

function passwordOptions() {
  //Lenght 8-128 characters
  var charLength = parseInt(
    prompt("Pick the length of the password between 8-128 characters.")
  );

  while (charLength <= 7 || charLength >= 129) {
    window.alert("Please pick a number in the specified range.");
    return charLength;
  }
  console.log(charLength);


  // Prompts //
  var confirmUppercase = window.confirm("Would you like to use uppercase letter? Choose 'ok' for yes or 'cancel' for no");
  var confirmLowercase = window.confirm("Would you like to use lowercase letters? Choose 'ok' for yes or 'cancel' for no");
  var confirmNumber = window.confirm("Would you like ot use numbers? Choose 'ok' for yes or 'cancel' for no");
  var confrimSpecial = window.confirm("Would you like to use special charaters? Choose 'ok' for yes or 'cancel' for no");
  console.log(confirmUppercase, confirmLowercase, confirmNumber, confrimSpecial);

  // Alert if none of the charecter types are clikced.  
  while (
    confirmUppercase == false && 
    confirmLowercase == false && 
    confirmNumber == false && 
    confrimSpecial == false
    ) {
    window.alert("Please pick at least at least ONE character type.")
    return confirmUppercase;
  }


  // characters return "true" or yes
 var pwOptions = {
   length: length,
   confirmUppercase: confirmUppercase,
   confirmLowercase: confirmLowercase,
   confirmNumber:confirmNumber,
   confrimSpecial: confrimSpecial
 }
 return pwOptions;
}

function generateRandomPw(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElemant = arr[randIndex];

  return randElemant;
}

function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

  if (options.confirmUppercase) {
    possibleChar = possibleChar.concat(upperCaseChar);
    guaranteedChar.push(generateRandomPw(upperCaseChar));
  }

  if (options.confirmLowercase) {
    possibleChar = possibleChar.concat(lowerCaseChar);
    guaranteedChar.push(generateRandomPw(lowerCaseChar));
  }
  
  if (options.confirmNumber) {
    possibleChar = possibleChar.concat(numberChar);
    guaranteedChar.push(generateRandomPw(numberChar));
  }

  if (options.confrimSpecial) {
    possibleChar = possibleChar.concat(specialChar);
    guaranteedChar.push(generateRandomPw(specialChar));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleChar = generateRandomPw(possibleChar);
    result.push(possibleChar);
  }

  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
    
  }
  return result.join(''); 
}



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







//   for (var i = 0; i < charLength; i++) {
//     pwRandom = pwRandom + pwOptions(Math.floor(Math.random() * pwOptions.length))
//     console.log(pwRandom);
//   }
//   return pwRandom;
// }
