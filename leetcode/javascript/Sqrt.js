/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    const xSqrt = Math.sqrt(x).toString();
    const numberPattern = new RegExp(/^(\d{1,})(\.|\,)(\d{1,})$/);

    const result = numberPattern.test(xSqrt) ?
        xSqrt.replace(numberPattern, '$1') : xSqrt;

    return Number(result);
};
