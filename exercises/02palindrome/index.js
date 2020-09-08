// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversedString = ``;
    for (const char of str) {
        reversedString = char + reversedString;
    }

    return str === reversedString;
}

const palindromeTwo = string => {
    const length = string.length;
    return string.split(``).every(
        (char, index) => {
            return char === string[length - 1 - index];
        }
    );
};

module.exports = palindromeTwo;
