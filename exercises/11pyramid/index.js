/*
 * --- Directions
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using the # character.  Make sure the
 * pyramid has spaces on both the left *and* right hand sides
 * --- Examples
 *   pyramid(1)
 *       '#'
 *   pyramid(2)
 *       ' # '
 *       '###'
 *   pyramid(3)
 *       '  #  '
 *       ' ### '
 *       '#####'
 */

function pyramid(n) {
    let space = ``;
    const middle = `#`;
    if (n > 1) {
        space = ` `;
    }

    for (let i = 0; i < n; i++) {
        console.log(space.repeat(n - i - 1) + middle.repeat((2 * (i + 1)) - 1) + space.repeat(n - i - 1));
    }
}

const pyramidTwo = n => {
    for (let i = 1, j = 1; i < n + 1; i++, j += 2) {
        console.log(' '.repeat(n - i) + '#'.repeat(j) + ' '.repeat(n - i));
    }
};

pyramidTwo(3);

module.exports = pyramidTwo;
