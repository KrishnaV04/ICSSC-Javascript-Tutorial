/**
 * Problem 6: For of Loop - Sum
 * 
 * Given a list of numbers, compute the sum of the list.
 * Use a For of Loop for this.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    total = 0
    for (const i of numbers) {
        total += i;
    }
    return total;
}

const tests = [
    [[1, 2, 3], 6],
    [[2, 31, 4, 5, 2, 67], 111],
    [[], 0],
]

module.exports = {problem, tests};