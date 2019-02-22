/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;

    for (let i = 0, lovers = preferences.length; i < lovers; i++) {
        const require_one = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
        const require_two = i + 1 !== preferences[i];
        if (require_one && require_two) {
            count++;
        }
    }

    return count / 3;
};