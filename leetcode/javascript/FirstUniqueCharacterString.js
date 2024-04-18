/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i in s)
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;

    return -1;
};
