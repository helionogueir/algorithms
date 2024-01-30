/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sOrdered = s.split('').sort().join('');
    const tOrdered = t.split('').sort().join('');

    return sOrdered === tOrdered;
};
