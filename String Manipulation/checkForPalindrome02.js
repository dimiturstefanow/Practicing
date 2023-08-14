// palindrome with for loop

const str = "I did, did I";

const isPalindrome = (inStr) => {
  inStr = inStr.replace(/\W/g, "")
  inStr = inStr.toLowerCase();
  console.log(inStr);
  for (let i = 0; i < inStr.length; i += 1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(str));
