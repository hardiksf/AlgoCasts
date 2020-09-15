/*
 * --- Directions
 * Write a function that accepts a positive number N.
 * The function should console log a step shape
 * with N levels using the # character.  Make sure the
 * step has spaces on the right hand side!
 * --- Examples
 *   steps(2)
 *       '# '
 *       '##'
 *   steps(3)
 *       '#  '
 *       '## '
 *       '###'
 *   steps(4)
 *       '#   '
 *       '##  '
 *       '### '
 *       '####'
 */

function steps(n) {
    const firstPart = `#`;
    let secondPart = ``;
    if (n > 1) {
        secondPart = ` `;
     }

    for (let i = 0; i < n; i++) {
        console.log(firstPart.repeat(i + 1) + secondPart.repeat(n - i - 1));
    }
}

steps(2);
module.exports = steps;
