/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const uniqueSet = new Set();
    for (let num of nums) 
        if (!uniqueSet.has(num)) uniqueSet.add(num);
        else uniqueSet.delete(num);
    return Array.from(uniqueSet)[0];
};
