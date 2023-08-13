const str = "Hello, bratcheto";
const reversed = reverseString(str);

console.log(reversed);

/*
@param {string} str
*/

function reverseString(str) {
  let reversed = "";

  for (const c of str) {
    // eH
    reversed = c + reversed;
  }

  return reversed;
}
