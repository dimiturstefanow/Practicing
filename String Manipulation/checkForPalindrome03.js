// Simpliest way to check palindrome

const str = "Anna"

function checkPalindrome(str){
    str = str.replace(/\W/g, "");
    str = str.toLowerCase();

    return str === str.split("").reverse().join("")
}

console.log(checkPalindrome(str));