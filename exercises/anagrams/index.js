// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mapA = getMapOfCharCount(stringA);
    const mapB = getMapOfCharCount(stringB);
    if (mapA.size !== mapB.size) {
        return false;
    }

    for (var [key, value] of mapA) {
        valeOfB = mapB.get(key);
        if (value !== valeOfB) {
            return false;
        }
    }
    return true;
}

const getMapOfCharCount = string => {
    const map = new Map();
    for (let char of string.toLowerCase()) {
        if (RegExp(/[a-z]/).test(char)) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
    }
    return map;
};


const anagramsTwo = (stringA, stringB) => {
    return processedString(stringA) === processedString(stringB);
};

const processedString = string => {
    return string.replace(/[^\w]/g, ``).toLowerCase().split(``).sort().join(``);
};

module.exports = anagramsTwo;
