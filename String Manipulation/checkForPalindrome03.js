// Simple way

const str = "I did, did I";

function isPalindrome(str){
  str = str.replace(/\W/g, "")
  str = str.toLowerCase();
  
  return str === str.split("").reverse().join("")
};

console.log(isPalindrome(str));
