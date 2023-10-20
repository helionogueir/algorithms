/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

var strStr = function (haystack, needle) {
    const regex = new RegExp(needle);
    return haystack.search(regex);
};
