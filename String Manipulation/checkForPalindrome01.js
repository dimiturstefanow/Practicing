

function checkPalindrome(str) {
  const reg = /[\W_]/g;
  const smallStr = str.toLowerCase().replace(reg, "");
  const reversed = smallStr.split("").reverse().join("");

  if (reversed === smallStr) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("A man, a plan, a canal. Panama"));
// synch