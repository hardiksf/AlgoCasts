/*
 * --- Directions
 * Check to see if two provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation.  Consider capital letters to be the same as lower case
 * --- Examples
 *   anagrams('rail safety', 'fairy tales') --> True
 *   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 *   anagrams('Hi there', 'Bye there') --> False
 */

const anagramsTwo = (stringA, stringB) => {
    return processedString(stringA) === processedString(stringB);
};

const processedString = string => {
    return string.replace(/[^\w]/g, ``).toLowerCase()
        .split(``)
        .sort()
        .join(``);
};

const processedStringTwo = string => {
    return string.replace(/[^\w]/g, '').toLowerCase();
};

const mapOfCharacterCount = string => {
    const map = new Map();
    for (const char of processedStringTwo(string)) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    return map;
};

const anagramsThree = (stringA, stringB) => {
    const mapA = mapOfCharacterCount(stringA);
    const mapB = mapOfCharacterCount(stringB);

    if (mapA.size !== mapB.size) {
        return false; // Alternative: compare the length of processed strings instead of checking the size of maps
    } else {
        let currentValueB;
        for ([key, value] of mapA) {
            currentValueB = mapB.get(key);
            if (value !== currentValueB) {
                return false;
            }
        }
    }
    return true;
};

module.exports = anagramsThree;
