/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let i = 0;
    let prefix = strs[0];

    do {
        for (let s of strs)
            if (i >= s.length || s[i] !== prefix[i])
                return prefix.substring(0, i);
    } while (i++ < prefix.length);

    return prefix;
};
