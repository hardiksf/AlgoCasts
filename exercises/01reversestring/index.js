/*
 * --- Directions
 * Given a string, return a new string with the reversed
 * order of characters
 * --- Examples
 *   reverse('apple') === 'leppa'
 *   reverse('hello') === 'olleh'
 *   reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
    let reversedString = ``;
    for (let i = 0, length = str.length; i < length; i++) {
        reversedString += str.charAt(length - i - 1);
    }
    return reversedString;
}

const reverseTwo = string => {
    return string.split(``)
        .reverse()
        .join(``);
};

const reverseThree = string => {
    let reversedString = ``;
    for (const character of string) {
        reversedString = character + reversedString;
    }
    return reversedString;
};

const reverseFour = string => {
    const arr = string.split(``);
    return arr.reduce((reversed, char) => {
        return char + reversed;
    }, ``);
};

const reverseFive = string => {
    const length = string.length;
    let result = '';
    for (let i = length - 1;  i >= 0; i--) {
        const char = string.charAt(i);
        result += char;
    }
    return result;
};
module.exports = reverseFive;
