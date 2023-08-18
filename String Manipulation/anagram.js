// Simpliest way to find if string is anagram

function isAnagram(str1, str2) {
sorted1 = str1.toLowerCase().split("").sort().join("");
sorted2 = str2.toLowerCase().split("").sort().join("");

return sorted1 === sorted2

}

console.log(isAnagram("dabebrat", "bratdabe"));
