/*
 * --- Directions
 * Write a function that returns the number of vowels
 * used in a string.  Vowels are the characters 'a', 'e'
 * 'i', 'o', and 'u'.
 * --- Examples
 *   vowels('Hi There!') --> 3
 *   vowels('Why do you ask?') --> 4
 *   vowels('Why?') --> 0
 */

function vowels(str) {
    let totalVowels = 0;
    const listOfVowels = `aeiou`;
    for (const char of str.toLowerCase()) {
        if (listOfVowels.includes(char)) {
            totalVowels++;
        }
    } return totalVowels;
}

const vowelsTwo = string => {
    const listOfVowels = ['a', 'e', 'i', 'o', 'u'];
    return string.toLowerCase()
        .split('')
        .filter(char => (listOfVowels.includes(char)))
        .length;
};

const vowelsRegex = string => {
    const listOfVowels = string.match(/[aeiou]/gi); // g-> don't stop at first occurrence, i-> ignore case
    if (listOfVowels) {
        return listOfVowels.length;
    } else {
        return 0;
    }
};

module.exports = vowelsRegex;
