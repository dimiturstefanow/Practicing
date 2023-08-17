// Easiest way to find is it anagram

function isAnagram(str1, str2){
    sorted1 = str1.split("").sort().join("").toLowerCase();
    sorted2 = str2.split("").sort().join("").toLowerCase();

    return sorted1 === sorted2
}

console.log(isAnagram("Hello", "lHelo"));

