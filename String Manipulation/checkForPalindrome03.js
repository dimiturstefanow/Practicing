// Easiest way to find if it is palindrome

const str = "racecar";

function isPalindrome(str){
  str = str.toLowerCase()
  str = str.replace(/\W/g, "");

  return str === str.split("").reverse().join("")
}

console.log(isPalindrome(str));