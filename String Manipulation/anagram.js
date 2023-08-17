// Easy way to find anagram

function isAnagram(str1, str2) {
 sorted1 = str1.toLowerCase().split("").sort().join("");
 sorted2 = str2.toLowerCase().split("").sort().join("");

  return (sorted1 === sorted2);
}

console.log(isAnagram("qsha", "qsHa"));

/*
function isAnagram(str1, str2){
    sorted1 = str1.split("").sort().join("").toLowerCase();
    sorted2 = str2.split("").sort().join("").toLowerCase();

    return sorted1 === sorted2
}

console.log(isAnagram("qsha", "qsHa")); // here I was receiving problem, this was false, I was expecting true, right above is the fixed version(uncommented)
*/