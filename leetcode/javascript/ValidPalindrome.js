/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lowerCaseStr = s.toLowerCase();
    const cleanedStr = lowerCaseStr.replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
};
