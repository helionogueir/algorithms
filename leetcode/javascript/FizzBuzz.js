/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    let value = "";

    for (let i = 1; i <= n; i++) {
        value = "";

        if (i % 3 === 0) value += "Fizz"
        if (i % 5 === 0) value += "Buzz"
        if (value === "") value = `${i}`;

        result.push(value);
    }

    return result;
};

