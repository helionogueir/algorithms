var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let total = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i + 1) - s.charCodeAt(i) === 1) total++;
        else total = 1;

        if (total > result) result = total;
    }

    return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
};
