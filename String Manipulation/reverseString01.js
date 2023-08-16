// Easiest way to reverse a string

const str = "Reversed"

function reverseStr(str){
    return str = str.split("").reverse().join("")
}

console.log(reverseStr(str));