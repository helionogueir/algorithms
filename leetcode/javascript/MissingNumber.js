/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsOdered = nums.sort((a, b) => a - b);
    const averge = Math.floor(numsOdered.length / 2);
    let count = numsOdered[averge] === averge ? averge : 0;

    
    for (let i = count; i < numsOdered.length; i++) {
        if (numsOdered[i] !== i) {
            return i;
        }
    }

    return numsOdered.length;
};
