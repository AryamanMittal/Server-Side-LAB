// Function to check if a given value is an instance of RegExp
function isRegularExpression(value) {
  return value instanceof RegExp;
}
// Define a regular expression
const regexPattern = /\d+/;
console.log(isRegularExpression(regexPattern)); // Output: true

// Define a string (not a regular expression)
const notRegexPattern = 'This is not a regex';
console.log(isRegularExpression(notRegexPattern)); // Output: false

