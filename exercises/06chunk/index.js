/*
 * --- Directions
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size
 * --- Examples
 * chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 */

function chunk(array, size) {
    const length = array.length;
    const chunk = [];
    const chunkLength = length / size;
    for (let i = 0; i < chunkLength; i++) {
        chunk[i] = array.splice(0, size);
    }
    return chunk;
}

const chunkTwo = (array, size) => {
    const chunk = [];
    const length = array.length;
    for (let i = 0; i < length; i = i + size) {
        chunk.push(array.slice(i, i + size));
    }
    return chunk;
};

const chunkThree = (array, size) => {
    const result = [];
    for (const element of array) {
        const lastElement = result[result.length - 1];
        if (!lastElement || lastElement.length === size) {
            result.push([element]);
        } else {
            lastElement.push(element);
        }
    }
    return result;
};

module.exports = chunkThree;
