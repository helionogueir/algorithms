/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return 3**parseInt(Math.log(n)/Math.log(3)) === n
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n == 1)
        return true;
    if(n<=0 || n%3 != 0)
        return false;
    while(n%3 == 0)
        n = n/3;
    return n==1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n > 1){
        n /= 3
    }
    
    return n === 1
};
