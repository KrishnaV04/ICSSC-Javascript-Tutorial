/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    const mem = {};
    let num = numbers[0];
    let count = 0;
    for (const n of numbers) {
        if (n in mem){
            mem[n] += 1;
            if (mem[n] > count){
                count = mem[n];
                num = n;
            }
        } else {
            mem[n] = 1;
        }
    }
    return num;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};