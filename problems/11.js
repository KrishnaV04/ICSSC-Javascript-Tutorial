/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    str = str.split("").filter((ch) => ch != ' ').join("").toLowerCase();
    for (let index = 0; index < str.length/2; ++index) {
        if (str[index] != str[str.length-1-index])
        {return false;}
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};