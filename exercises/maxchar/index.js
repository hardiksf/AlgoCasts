// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = new Map();
    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    const maxValue = Math.max(...map.values());

    for (const [key, value] of map.entries()) {
        if (value === maxValue) {
            return key;
        }
    }
}

module.exports = maxChar;
