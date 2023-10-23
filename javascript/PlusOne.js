/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const value = BigInt(digits.join(''));
    const number = value + 1n;

    return String(number)
        .split('')
        .map(Number);
};

var plusOne = function(digits) {
    let rem = 1;
    for(let i=digits.length-1; i>=0; i--) {
        let temp = (digits[i] + rem);
        digits[i] = temp % 10;
        rem = Math.floor(temp / 10);
    }
    return (rem==0) ? digits : [rem].concat(digits); 
};
