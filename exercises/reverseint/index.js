// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let string = n.toString();
    let reversedString = `;`
    for (const char of string) {
        reversedString = char + reversedString;
    }
    if (n < 0) {
        return parseInt(reversedString) * (-1);
    }
    return parseInt(reversedString);
}

const reverseIntTwo = n => {
    reverseString = n.toString().split(``).reverse().join(``);
    return parseInt(reverseString) * Math.sign(n);
};

module.exports = reverseIntTwo;
