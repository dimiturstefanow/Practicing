// Simpliest way to find if string is anagram

const str1 = "civic"
const str2 = "civic"

function isAnagram(str1, str2){
sorted1 = str1.toLowerCase().split("").reverse().join("");
sorted2 = str2.toLowerCase().split("").reverse().join("");

return sorted1 === sorted2


}

console.log(isAnagram(str1, str2));
