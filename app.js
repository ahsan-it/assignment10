// ? Chapter 17-20
// ! Ans 01
const numRows = 3;
const numCols = 3;
const multiArray = [];
for (let i = 0; i < numRows; i++) {
const row = [];
for (let j = 0; j < numCols; j++) {
row.push(0); 
}
 multiArray.push(row);
}
document.write(multiArray);

// ! Ans 02
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  document.write("<table border='1'>");
  for (let i = 0; i < matrix.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < matrix[i].length; j++) {
      document.write("<td>" + matrix[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
// ! Ans 03
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }
// ! Ans 04
const tableNumber = parseInt(prompt("Enter the table number:"));
const tableLength = parseInt(prompt("Enter the table length:"));

if (!isNaN(tableNumber) && !isNaN(tableLength)) {
  document.write("<h2>Multiplication Table for " + tableNumber + "</h2>");
  document.write("<table border='1'>");
  document.write("<tr><th>Multiplier</th><th>Result</th></tr>");

  for (let i = 1; i <= tableLength; i++) {
    const result = tableNumber * i;
    document.write("<tr><td>" + tableNumber + " x " + i + "</td><td>" + result + "</td></tr>");
  }
  document.write("</table>");
} else {
  document.write("Invalid input. Please enter valid numbers.");
}
// ! Ans 05
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>List of Fruits:</h2>");
document.write("<ul>");

for (let i = 0; i < fruits.length; i++) {
  document.write("<li>" + fruits[i] + "</li>");
}
document.write("</ul>");
// ! Ans 06
document.write("<h2>a. Counting:</h2>");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h2>b. Reverse counting:</h2>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<h2>c. Even:</h2>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<h2>d. Odd:</h2>");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

document.write("<h2>e. Series:</h2>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
// ! Ans 07
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item to search:");
const userInputLower = userInput.toLowerCase();
let isFound = false;
for (let i = 0; i < A.length; i++) {
const currentItemLower = A[i].toLowerCase();

  if (currentItemLower === userInputLower) {
    isFound = true;
    break;
  }
}

if (isFound) {
  alert(userInput + " is found in the list.");
} else {
  alert(userInput + " is not found in the list.");
}
// ! Ans 08
const num  = [24, 53, 78, 91, 12];
let maxNumber = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] > maxNumber) {
    maxNumber = num[i];
  }
}
document.write("The largest number in the array is: " + maxNumber);
// ! Ans 09
const A = [24, 53, 78, 91, 12];
let minNumber = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] < minNumber) {
    minNumber = A[i];
  }
}
document.write("The smallest number in the array is: " + minNumber);
// ! Ans 10
document.write("<h2>Multiples of 5 from 1 to 100:</h2>");
document.write("<ul>");

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write("<li>" + i + "</li>");
  }
}
document.write("</ul>");

//  ? Chapter 21-25
// ! Ans 01
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const fullName = `${firstName} ${lastName}`;
const greeting = `Hello, ${fullName}!`;
document.write("<h2>Greeting:</h2>");
document.write("<p>" + greeting + "</p>");
// ! Ans 02
const mobileModel = prompt("Enter your favorite mobile phone model:");
const inputLength = mobileModel.length;
document.write("<h2>Length of Your Input:</h2>");
document.write("<p>The length of your favorite mobile phone model input is: " + inputLength + " characters</p>");
// ! Ans 03
const word = "Pakistani";
const indexOfN = word.indexOf("n");
document.write("<h2>Index of 'n' in 'Pakistani':</h2>");
document.write("<p>The index of 'n' in 'Pakistani' is: " + indexOfN + "</p>");
// ! Ans 04
const word = "Hello World";
const lastIndex = word.lastIndexOf("l");
document.write("<h2>Last Index of 'l' in 'Hello World':</h2>");
document.write("<p>The last index of 'l' in 'Hello World' is: " + lastIndex + "</p>");
// ! Ans 05
const word = "Pakistani";
const characterAtIndex3 = word.charAt(3);
document.write("<h2>Character at 3rd Index in 'Pakistani':</h2>");
document.write("<p>The character at the 3rd index in 'Pakistani' is: " + characterAtIndex3 + "</p>");
// ! Ans 06
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const fullName = firstName.concat(" ", lastName);
const greeting = "Hello, ".concat(fullName, "!");
document.write("<h2>Greeting:</h2>");
document.write("<p>" + greeting + "</p>");
// ! Ans 07
// Define the word
const word = "Hyderabad";
const modifiedWord = word.replace("Hyder", "Islam");
document.write("<h2>Modified Word:</h2>");
document.write("<p>The modified word is: " + modifiedWord + "</p>");
// ! Ans 08
var message = "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMessage = message.replace(/and/g, "&");
document.write("<h2>Modified Message:</h2>");
document.write("<p>The modified message is: " + modifiedMessage + "</p>");
// ! Ans 09
var str = "472";
var num1 = parseInt(str);
var num2 = Number(str);
document.write("<h2>Converted Values and Types:</h2>");
document.write("<p>Original string: " + str + ", Type: " + typeof str + "</p>");
document.write("<p>Converted to number (parseInt): " + num1 + ", Type: " + typeof num1 + "</p>");
document.write("<p>Converted to number (Number constructor): " + num2 + ", Type: " + typeof num2 + "</p>");
// ! Ans 10
const userInput = prompt("Enter a text:");
const uppercaseText = userInput.toUpperCase();
document.write("<h2>Uppercase Input:</h2>");
document.write("<p>" + uppercaseText + "</p>");
// ! Ans 11
const userInput = prompt("Enter a text:");
function toTitleCase(input) {
  return input.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}
const titleCaseText = toTitleCase(userInput);
document.write("<h2>Title Case Input:</h2>");
document.write("<p>" + titleCaseText + "</p>");
// ! Ans 12
var num = 35.36;
var numAsString = num.toString().replace(".", "");
document.write("<h2>Result:</h2>");
document.write("<p>" + numAsString + "</p>");
// ! Ans 13
const username = prompt("Enter your username:");
function containsSpecialSymbols(username) {
  const specialSymbols = ['@', '.', ',', '!'];
  for (let i = 0; i < specialSymbols.length; i++) {
    if (username.includes(specialSymbols[i])) {
      return true;
    }
  }
  return false;
}
if (containsSpecialSymbols(username)) {
  alert("Please enter a valid username without special symbols [@, ., , !]");
} else {
  alert("Username is valid: " + username);
}
//  ! Ans 14
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item to search:");
function caseInsensitiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === item.toLowerCase()) {
      return true;
    }
  }
  return false;
}
const isItemFound = caseInsensitiveSearch(A, userInput);
if (isItemFound) {
  alert(userInput + " is available in the list.");
} else {
  alert(userInput + " is not found in the list.");
}
// ! Ans 15
function containsAlphabetsAndNumbers(input) {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    return regex.test(input);
  }
  let password = prompt("Enter your password:");
  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    }
    if (/^[0-9]/.test(password)) {
      return false;
    }
    if (!containsAlphabetsAndNumbers(password)) {
      return false;
    }
    return true;
  }
  while (!validatePassword(password)) {
    alert("Please enter a valid password that meets the requirements.");
    password = prompt("Enter your password:");
  }
  
  alert("Password is valid: " + password);
//   ! Ans 16
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write("<h2>Array Elements:</h2>");
document.write("<p>");
for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>");
}
document.write("</p>");
// ! Ans 17
const userInput = prompt("Enter a string:");
if (userInput !== null && userInput !== "") 
{
const lastCharacter = userInput[userInput.length - 1];
alert("The last character is: " + lastCharacter);
} else {
  alert("Invalid input. Please enter a valid string.");
}
// ! Ans 18
const inputString = "The quick brown fox jumps over the lazy dog.";
function countOccurrences(input, word) {
  const lowerInput = input.toLowerCase();
  const lowerWord = word.toLowerCase();
  const regex = new RegExp("\\b" + lowerWord + "\\b", "g");
  const matches = lowerInput.match(regex);
  return matches ? matches.length : 0;
}
const wordToCount = "the";
const count = countOccurrences(inputString, wordToCount);
console.log("Number of occurrences of \"" + wordToCount + "\": " + count);



















  
