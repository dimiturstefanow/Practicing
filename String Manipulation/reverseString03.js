const str = "Hello, bratcheto";
const reversed = reverseString(str);

console.log(reversed);

/*
@param {string} str
*/

function reverseString(str) {
  return Array.from(str).reduce((reversed, c) => c + reversed, "");
}
