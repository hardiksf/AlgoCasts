// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Preferred
const capitalize = str => {
    return str
        .split(` `)
        .map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(` `);
};

// Brute force
const capitalizeTwo = str => {
    let result = str.charAt(0).toUpperCase();
    const length = str.length;
    for (let i = 1; i < length; i++) {
        if (str.charAt(i) === ` ` && i !== length - 1) {
            result = result + str.charAt(i) + str.charAt(i + 1).toUpperCase();
            i++;
        } else {
            result = result + str.charAt(i);
        }
    }

    return result;

};

module.exports = capitalizeTwo;
