/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }

    let maxLen = 0;
    let lo = 0;
    let result = s;

    const expandPalindrome = (j, k) => {
        while (j >= 0 && k < s.length && s[j] === s[k]) {
            j--;
            k++;
        }
        if (maxLen < k - j - 1) {
            maxLen = k - j - 1;
            lo = j + 1;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandPalindrome(i, i);
        expandPalindrome(i, i + 1);
    }

    return result.substring(lo, lo + maxLen);
};
