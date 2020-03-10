// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversedString = ``;
    for (let i = 0, length = str.length; i < length; i++) {
        reversedString += str.charAt(length - i - 1);
    }
    return reversedString;
}

module.exports = reverse;
