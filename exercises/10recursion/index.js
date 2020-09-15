// recursion
const countDown = n => {
    // base case
    if (n < 0) return;

    // some logic
    console.log(n);

    // call function again by changing  argument
    countDown(n - 1);
};
countDown(2);
module.exports = countDown;
