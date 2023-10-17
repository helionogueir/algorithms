const PARENTHESES_PATTERN = /^[\(\)\[\]\{\}]{2,}$/;
const PARENTHESES_OPEN_REFERENCE = ['(', '[', '{'];
const PARENTHESES_CLOSE_REFERENCE = {')':'(', ']':'[', '}':'{'};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0
        || !PARENTHESES_PATTERN.test(s)
        || s.length > Math.pow(10, 4)) return false;

    const parenthesesStack = [];

    for (let i = 0; i < s.length; i++) {
        if (PARENTHESES_OPEN_REFERENCE.indexOf(s[i]) !== -1)
            parenthesesStack.push(s[i]);
        else if (parenthesesStack.pop() !== PARENTHESES_CLOSE_REFERENCE[s[i]])
            return false;
    }

    return !parenthesesStack.length;
};
