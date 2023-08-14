// Simpliest way to reverse a string


const str = "Example"
console.log(reverseString(str));

function reverseString(str){
    return str.split("").reverse().join("")
}