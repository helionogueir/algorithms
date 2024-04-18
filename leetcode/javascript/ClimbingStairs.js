/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1, 1];

    for(let i=2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) return n;

    let prev1 = 1;
    let prev2 = 1;
    let result = n;

    for (let i = 2; i <= n; i++) {
        result = prev1 + prev2;
        prev1 = prev2;
        prev2 = result;
    }

    return result;
};
