/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const complementIndice = nums.indexOf(complement);

        if (complementIndice < 0 || i === complementIndice) continue;

        return [i, complementIndice];
    }

    return [];
};
