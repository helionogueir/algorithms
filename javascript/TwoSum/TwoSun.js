/**
 * Two Sun
 * - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *   You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *   You can return the answer in any order.
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

module.exports = twoSum;
