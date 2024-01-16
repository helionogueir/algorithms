/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = 0;
    for (let i = 1; i <= 32; i++) {
        ans = (ans << 1) | (n & 1);
        n >>>= 1;
    }
    return ans >>> 0;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const reversedBin = n.toString(2).split('').reverse().join('');
    const result =  reversedBin.padEnd(32,'0'); 
    return parseInt(result, 2);
};
