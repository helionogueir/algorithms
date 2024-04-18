/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityElement = nums[0];
    const appearsMoreThan = Math.floor(nums.length / 2);
    const elements = nums.reduce((acc, num) => {
        if (acc[num]) acc[num] += 1;
        else acc[num] = 1;

        return acc;
    }, {});

    for (const element in elements)
        if (elements[element] > appearsMoreThan) majorityElement = element;

    return majorityElement;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementExtra = function(nums) {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};