/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const bit = Math.pow(2,31) - 1;
    const rev= x.toString().split('').reverse().join('');
    const result = parseInt(rev);

    if (result > (bit) || result < -(bit)) return 0;
    if (x < 0) return -result;
    else return result;
};
